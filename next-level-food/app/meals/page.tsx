import { Fragment } from 'react';
import Link from 'next/link';

import { SHARE_MEALS } from '@/app/configs/routes';
import MealsGrid from '@/app/components/meals-grid/meals-grid';

import styles from './page.module.css';

export default async function Meals() {
  const res = await fetch('http://localhost:3000/api/meals');
  const meals = await res.json();

  return (
    <Fragment>
      <header>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available
          recepis and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={styles.cta}>
          <Link href={SHARE_MEALS}>Share Your Favorite Recepi</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals || []} />
      </main>
    </Fragment>
  );
}
