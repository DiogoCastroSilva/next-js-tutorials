'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { INavLink } from './contracts';

export default function NavLink({ children, href }: INavLink) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  );
}
