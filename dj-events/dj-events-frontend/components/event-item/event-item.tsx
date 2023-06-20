import Image from 'next/image';
import Link from 'next/link';
import { SingleEvent } from '@/models/events';
import styles from '@/styles/EventItem.module.css';

export default function EventItem({
  slug,
  name,
  image,
  description,
  date,
  time,
}: SingleEvent) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt={description}
          src={image ? image : '/images/event-default.png'}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {date} at {time}
        </span>
        <h3>{name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
}
