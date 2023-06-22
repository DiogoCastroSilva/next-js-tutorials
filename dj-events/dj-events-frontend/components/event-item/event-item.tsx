import Image from 'next/image';
import Link from 'next/link';
import { SingleEvent } from '@/models/events';
import styles from '@/styles/EventItem.module.css';

export default function EventItem({
  attributes: { slug, name, image, date, time },
}: SingleEvent) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt={
            image.data.attributes.alternativeText || image.data.attributes.name
          }
          src={
            image
              ? image.data.attributes.formats.thumbnail.url
              : '/images/event-default.png'
          }
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <span>
          {new Date(date).toLocaleDateString('en-US')} at {time}
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
