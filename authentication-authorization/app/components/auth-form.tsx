'use client';
import { useActionState } from 'react';
import Link from 'next/link';

import { auth } from '@/app/actions/auth';
import { FormState } from '@/contracts/auth';

export default function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const [state, formAction] = useActionState<FormState, FormData>(
    auth.bind(null, mode),
    undefined
  );

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password?.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <p>
        <button type="submit">
          {mode === 'signup' && 'Create Account'}
          {mode === 'login' && 'Login'}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Create account.</Link>}
        {mode === 'signup' && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
