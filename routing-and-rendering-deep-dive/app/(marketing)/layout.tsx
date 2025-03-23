import '../globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Routing & Rendering: Deep Dive',
  description: 'Learn how to route to different pages.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
