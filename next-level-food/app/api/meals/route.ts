import db from '../db';

export function GET() {
  const meals = db.prepare('SELECT * FROM meals').all();

  return new Response(JSON.stringify(meals), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
