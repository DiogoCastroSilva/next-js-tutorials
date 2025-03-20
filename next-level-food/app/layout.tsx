import { ReactNode } from 'react';
import { Metadata } from 'next';

import MainHeader from '@/app/components/main-header/main-header';

import './globals.css';

export const metadata: Metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
