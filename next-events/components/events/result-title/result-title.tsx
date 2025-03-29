import Button from '@/components/ui/button/button';

import styles from './result-title.module.css';
import type { IResultTitle } from './contracts';

export default function ResultTitle({ date }: IResultTitle) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}
