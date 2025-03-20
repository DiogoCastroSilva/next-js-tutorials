import db from '../../db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);

  if (!meal) {
    return new Response(JSON.stringify(null), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ ...meal }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
