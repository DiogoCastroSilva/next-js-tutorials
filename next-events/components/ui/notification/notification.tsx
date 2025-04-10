import useNotifications from '@/hooks/use-notifications';

import styles from './notification.module.css';

import type { INotification } from './contracts';

export default function Notification({
  title,
  message,
  status,
}: INotification) {
  const { hideNotification } = useNotifications();

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  if (status === 'pending') {
    statusClasses = styles.pending;
  }

  const activeClasses = `${styles.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
