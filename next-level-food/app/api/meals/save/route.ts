import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import xss from 'xss';

import db from '../../db';

const publicPath = path.join(`${process.cwd()}/public`);

const saveImageInPublic = async (image: File, fileName: string) => {
  const stream = fs.createWriteStream(`${publicPath}/images/${fileName}`);
  const bufferedImage = await image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });
};

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // TODO: Add validation
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const title = data.get('title') as string;
    const summary = data.get('summary') as string;
    const newInstructions = data.get('instructions') as string;
    const image = data.get('image') as File;

    const slug = slugify(title, { lower: true });
    const instructions = xss(newInstructions);

    const imageExtension = image.name.split('.').pop();
    const fileName = `${slug}.${imageExtension}`;

    const imageLocation = `/images/${fileName}`;

    const meals = {
      title,
      summary,
      instructions,
      creator: name,
      creator_email: email,
      image: imageLocation,
      slug,
    };

    db.prepare(
      `INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
   VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
   )`
    ).run(meals);

    saveImageInPublic(image, fileName);

    return new Response(JSON.stringify(meals), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);

    return new Response(JSON.stringify(null), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
