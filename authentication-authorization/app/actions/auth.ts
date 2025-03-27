'use server';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

import { FormState, SignupFormSchema } from '@/contracts/auth';
import { createSession } from '@/lib/session';
import { createUser, getUserByEmail } from '@/lib/user';

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

    const id = createUser(email, hashedPassword);

    await createSession(id.toString());
  } catch (error) {
    console.log(error);

    return {
      errors: {
        message: 'An error occurred while creating your account.',
      },
    };
  }

  redirect('/training');
}

export async function login(_state: FormState, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const existingUser = getUserByEmail(email);

    console.log('user', existingUser);

    if (!existingUser) {
      return {
        errors: {
          email: ['Could not authenticate user, please check your credentials'],
        },
      };
    }

    const passwordIsValid = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!passwordIsValid) {
      return {
        errors: {
          email: ['Could not authenticate user, please check your credentials'],
        },
      };
    }

    await createSession(existingUser.id.toString());
  } catch (error) {
    console.log(error);

    return {
      errors: {
        message: 'An error occurred while login you in.',
      },
    };
  }

  redirect('/training');
}

export async function auth(
  mode: 'login' | 'signup',
  state: FormState,
  formData: FormData
) {
  if (mode === 'login') {
    return await login(state, formData);
  }

  return await signup(state, formData);
}
