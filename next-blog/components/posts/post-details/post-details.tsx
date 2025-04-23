import PostHeader from './post-header';
import styles from './post-details.module.css';

import type { IPost } from '@/contracts/post';

const DUMMY_POST: IPost = {
  id: 'getting-started-nextjs',
  title: 'Getting Started with Next.js',
  image: 'getting-started-nextjs.png',
  date: '2023-10-01',
  content: '# This is the first post',
};

export default function PostDetails() {
  const { title, image, content } = DUMMY_POST;
  const imagePath = `/images/posts/${image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
}
