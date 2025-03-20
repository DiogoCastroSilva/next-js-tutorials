'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { MEALS } from '@/app/configs/routes';
import { API_ENDPOINT } from '@/app/configs/api';

export async function shareMeal(event: FormData) {
  try {
    const reply = await fetch(`${API_ENDPOINT}/api/meals/save`, {
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
