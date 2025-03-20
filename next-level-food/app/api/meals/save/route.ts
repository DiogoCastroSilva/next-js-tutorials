import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import xss from 'xss';

import { ImageSchema, MealSchema } from '@/app/utils/schema-validation';
import db from '@/app/api/db';

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
    const newInstructions = xss(data.get('instructions') as string);

    const image = ImageSchema.parse(data.get('image'));
    const { name, email, title, summary, instructions } = MealSchema.parse({
      name: data.get('name'),
      email: data.get('email'),
      title: data.get('title'),
      summary: data.get('summary'),
      image: data.get('image'),
      instructions: newInstructions,
    });

    const slug = slugify(title, { lower: true });

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

    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
