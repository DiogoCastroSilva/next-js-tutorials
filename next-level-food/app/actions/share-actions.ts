'use server';
import { redirect } from 'next/navigation';

import { MEALS } from '@/app/configs/routes';

export async function shareMeal(event: FormData) {
  await fetch('http://localhost:3000/api/meals/save', {
    method: 'POST',
    body: event,
  });

  redirect(MEALS);
}
