import { Metadata } from 'next';
import { ReactNode } from 'react';

import Header from '@/app/components/header';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextPosts',
  description: 'Browse and share amazing posts.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
