'use server';
import { redirect } from 'next/navigation';

import { MEALS } from '@/app/configs/routes';
import { revalidatePath } from 'next/cache';

export async function shareMeal(event: FormData) {
  try {
    const reply = await fetch('http://localhost:3000/api/meals/save', {
      method: 'POST',
      body: event,
    });

    if (!reply.ok) {
      throw new Error(reply.statusText);
    }

    revalidatePath(MEALS);
    redirect(MEALS);
  } catch {
    throw new Error('Failed to share meal');
  }
}
