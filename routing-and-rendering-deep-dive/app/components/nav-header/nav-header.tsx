import Link from 'next/link';

import { HOME, NEWS, ARCHIVE } from '@/app/configs/routes';
import NavLink from '@/app/components/nav-link/nav-link';

export default function NavHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={HOME}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href={NEWS}>News</NavLink>
          </li>
          <li>
            <NavLink href={ARCHIVE}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
