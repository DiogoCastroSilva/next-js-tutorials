import { createContext, PropsWithChildren, useEffect, useState } from 'react';

import { INotification } from '@/states/notification-context/contracts';

const NotificationContext = createContext<{
  notification: INotification | null;
  showNotification: (notification: INotification) => void;
  hideNotification: () => void;
}>({
  notification: null,
  showNotification: () => {
    throw new Error('showNotification function not implemented');
  },
  hideNotification: () => {
    throw new Error('hideNotification function not implemented');
  },
});

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const [activeNotification, setActiveNotification] =
    useState<INotification | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotification = (notification: INotification) => {
    setActiveNotification(notification);
  };

  const hideNotification = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
