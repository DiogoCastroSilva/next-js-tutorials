import Link from 'next/link';
import Image from 'next/image';

import styles from './post-item.module.css';

import type { IPost } from '@/contracts/post';

export default function PostItem({ id, image, title, date, excerpt }: IPost) {
  const formmatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={styles.post}>
      <Link href={`/posts/${id}`} className={styles.link}>
        <div className={styles.image}>
          <Image
            src={`/images/posts/${image}`}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formmatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
