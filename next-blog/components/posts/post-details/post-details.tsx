import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-details.module.css';

import type { IPost } from '@/contracts/post';

export default function PostDetails({ title, image, content }: IPost) {
  const imagePath = `/images/posts/${image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
