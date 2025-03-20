import { Fragment, Suspense } from 'react';
import Link from 'next/link';

import { SHARE_MEALS } from '@/app/configs/routes';
import Meals from '@/app/components/meals/meals';

import styles from './page.module.css';
import LoadingMeals from '@/app/components/loading-meals/loading-meals';

export const dynamic = 'force-dynamic';

export default function MealsPage() {
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
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </Fragment>
  );
}
