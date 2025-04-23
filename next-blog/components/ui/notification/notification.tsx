import ReactDOM from 'react-dom';

import styles from './notification.module.css';

import type { INotification } from './contracts';

function Notification({ title, message, status }: INotification) {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssStyles = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')!
  );
}

export default Notification;
