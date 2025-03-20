'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './main-header-link.module.css';

import type { IMainHeaderLink } from './contracts';

export default function MainHeaderLink({ href, children }: IMainHeaderLink) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${
        pathname.startsWith(href) ? styles.active : ''
      }`}
    >
      {children}
    </Link>
  );
}
