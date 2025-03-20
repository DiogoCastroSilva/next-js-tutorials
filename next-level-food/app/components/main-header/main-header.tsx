import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '@/assets/logo.png';
import { HOME, MEALS, COMMUNITY } from '@/app/configs/routes';
import MainHeaderBackground from '@/app/components/main-header-background/main-header-background';
import MainHeaderLink from '@/app/components/main-header-link/main-header-link';

import styles from './main-header.module.css';

const MainHeader = () => {
  return (
    <Fragment>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={HOME}>
          <Image src={Logo} alt="Logo - A plate with food on it" priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <MainHeaderLink href={MEALS}>Browse Meals</MainHeaderLink>
            </li>
            <li>
              <MainHeaderLink href={COMMUNITY}>
                Foodies Community
              </MainHeaderLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
