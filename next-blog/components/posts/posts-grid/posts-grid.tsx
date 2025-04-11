import PostItem from '@/components/posts/post-item/post-item';

import styles from './posts-grid.module.css';

import type { TPosts } from '@/contracts/post';

export default function PostsGrid({ posts }: { posts: TPosts }) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  );
}
