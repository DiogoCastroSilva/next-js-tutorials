'use server';

export async function shareMeal(event: FormData) {
  const meal = {
    creator: event.get('name'),
    creator_email: event.get('email'),
    title: event.get('title'),
    summary: event.get('summary'),
    instructions: event.get('instructions'),
    image: event.get('image'),
  };

  console.log(meal);
}
