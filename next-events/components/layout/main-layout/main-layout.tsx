import { PropsWithChildren } from 'react';

import MainHeader from '@/components/layout/main-header/main-header';
import Notification from '@/components/ui/notification/notification';
import useNotifications from '@/hooks/use-notifications';

export default function MainLayout({ children }: PropsWithChildren) {
  const { notification } = useNotifications();

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
}
