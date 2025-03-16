import Image from 'next/image';
import Link from 'next/link';

import { IMeal } from '@/app/contracts/meal';
import { MEALS } from '@/app/configs/routes';

import styles from './meal-item.module.css';

export default function MealItem({
  title,
  image,
  creator,
  summary,
  slug,
}: IMeal) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles['header-text']}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`${MEALS}/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
