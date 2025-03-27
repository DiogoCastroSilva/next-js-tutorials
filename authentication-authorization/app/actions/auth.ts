'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

import { FormState, SignupFormSchema } from '@/contracts/auth';
import db from '@/lib/db';
import { createSession } from '@/lib/session';

export async function signup(_state: FormState, formData: FormData) {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = db
      .prepare(
        `INSERT INTO users (email, password)
      VALUES (?, ?)`
      )
      .run(email, hashedPassword);

    await createSession(result.lastInsertRowid.toString());
  } catch (error) {
    console.log(error);

    return {
      message: 'An error occurred while creating your account.',
    };
  }

  redirect('/training');
}
