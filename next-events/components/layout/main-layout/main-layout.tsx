import { PropsWithChildren } from 'react';

import MainHeader from '@/components/layout/main-header/main-header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
