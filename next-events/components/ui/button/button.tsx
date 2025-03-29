import { PropsWithChildren } from 'react';
import Link from 'next/link';

import styles from './button.module.css';

import type { IButton } from './contracts';

export default function Button({
  children,
  link,
  onClick,
}: PropsWithChildren<IButton>) {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
