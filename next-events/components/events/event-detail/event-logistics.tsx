import AddressIcon from '@/components/ui/icons/address-icon';
import DateIcon from '@/components/ui/icons/date-icon';

import { IEventLogistics } from './contracts';
import styles from './event-logistics.module.css';
import LogisticsItem from './logistics-item';
import Image from 'next/image';

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
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
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
