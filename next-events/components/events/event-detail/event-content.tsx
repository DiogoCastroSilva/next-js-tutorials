import { PropsWithChildren } from 'react';

import styles from './event-content.module.css';

export default function EventContent({ children }: PropsWithChildren) {
  return <section className={styles.content}>{children}</section>;
}
