import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/logo.png';
import { HOME, MEALS, COMMUNITY } from '@/app/configs/routes';

import styles from './main-header.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={HOME}>
        <Image src={Logo} alt="Logo - A plate with food on it" priority />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={MEALS}>Browse Meals</Link>
          </li>
          <li>
            <Link href={COMMUNITY}>Foodies Cummunity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
