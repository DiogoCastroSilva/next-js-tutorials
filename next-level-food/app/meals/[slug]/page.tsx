import { Fragment } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { IMeal } from '@/app/contracts/meal';

import styles from './page.module.css';

export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetch(`http://localhost:3000/api/meals/${slug}`);
  const meal = (await data.json()) as IMeal;

  if (!meal) {
    notFound();
  }

  const instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt="" fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{ __html: instructions }}
        ></p>
      </main>
    </Fragment>
  );
}
