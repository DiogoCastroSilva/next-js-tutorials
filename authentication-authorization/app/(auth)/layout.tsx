import { ReactNode } from 'react';

import { logout } from '@/app/actions/auth';

export default function AuthRootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
