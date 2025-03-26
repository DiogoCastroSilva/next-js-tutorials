'use server';

import { hashUserPassword } from '@/lib/hash';
import { createUser } from '@/lib/user';

import type { IFormState } from './contracts';

export async function signup(
  _prevState: IFormState | undefined,
  formData: FormData
): Promise<IFormState | undefined> {
  const user = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  let state: IFormState = {
    errors: {},
  };

  if (!user.email.includes('@')) {
    state = {
      errors: { ...state.errors, email: 'Please enter a valid email!' },
    };
  }

  if (user.password?.length < 8) {
    state = {
      errors: {
        ...state.errors,
        password: 'Password must be at least 8 characters long!',
      },
    };
  }

  if (state.errors && Object.keys(state.errors).length > 0) {
    return { errors: state.errors };
  }

  const hashedPassword = hashUserPassword(user.password);

  try {
    createUser(user.email, hashedPassword);
  } catch (error) {
    throw error;
  }
}
