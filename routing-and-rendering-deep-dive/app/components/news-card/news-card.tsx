import Image from 'next/image';

import { INews } from '@/app/contracts/news';
import { NEWS } from '@/app/configs/routes';

import styles from './news-card.module.css';
import Link from 'next/link';

export default function NewsCard({ id, image_url, title, summary }: INews) {
  return (
    <li className={styles.card}>
      <Link href={`${NEWS}/${id}`} className={styles.link} />
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image_url}
          alt={summary}
          objectFit="cover"
          fill
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </li>
  );
}
