import Link from 'next/link';

import { HOME, NEWS } from '@/app/configs/routes';

export default function NavHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={HOME}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={NEWS}>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
