import { PropsWithChildren } from 'react';

import { ILogisticsItem } from './contracts';
import styles from './logistics-item.module.css';

export default function LogisticsItem({
  icon,
  children,
}: PropsWithChildren<ILogisticsItem>) {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.content}>{children}</span>
    </li>
  );
}
