import Image from 'next/image';
import Link from 'next/link';

import styles from './event-item.module.css';

import type { IEvent } from '@/contracts/event';

export default function EventItem({ event }: { event: IEvent }) {
  const { id, image, description, title, date, location } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={description} fill />
      </div>
      <div className={styles.content}>
        <div>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}
