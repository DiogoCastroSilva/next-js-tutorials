import { Fragment, PropsWithChildren } from 'react';

import MainNavigation from './main-navigation/main-navigation';

function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
