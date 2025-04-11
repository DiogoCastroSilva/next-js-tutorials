import { PropsWithChildren } from 'react';

import MainNavigation from '@/components/layout/main-navigation/main-navigation';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
