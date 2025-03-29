import { PropsWithChildren } from 'react';

import styles from './error-alert.module.css';

export default function ErrorAlert({ children }: PropsWithChildren) {
  return <div className={styles.alert}>{children}</div>;
}
