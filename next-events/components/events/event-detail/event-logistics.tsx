import DateIcon from '@/components/events/ui/icons/date-icon';
import AddressIcon from '@/components/events/ui/icons/address-icon';

import LogisticsItem from './logistics-item';
import styles from './event-logistics.module.css';
import { IEventLogistics } from './contracts';

export default function EventLogistics({
  date,
  address,
  image,
  imageAlt,
}: IEventLogistics) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={<DateIcon />}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={<AddressIcon />}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
