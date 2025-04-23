import Image from 'next/image';

import styles from './post-header.module.css';

import type { IPost } from '@/contracts/post';

export default function PostHeader({
  title,
  image,
}: Pick<IPost, 'title' | 'image'>) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image
        src={image}
        alt={title}
        width={200}
        height={150}
        className={styles.image}
      />
    </header>
  );
}
