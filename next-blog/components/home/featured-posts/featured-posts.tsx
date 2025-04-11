import PostsGrid from '@/components/posts/posts-grid/posts-grid';
import styles from './featured-posts.module.css';

import type { TPosts } from '@/contracts/post';

export default function FeaturedPosts({ posts }: { posts: TPosts }) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
