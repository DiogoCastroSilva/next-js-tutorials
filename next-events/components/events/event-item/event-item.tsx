import Image from 'next/image';

import Button from '@/components/events/ui/button/button';
import DateIcon from '@/components/events/ui/icons/date-icon';
import AddressIcon from '@/components/events/ui/icons/address-icon';
import ArrowRightIcon from '@/components/events/ui/icons/arrow-right-icon';

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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
