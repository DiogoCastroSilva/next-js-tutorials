import PostsGrid from '@/components/posts/posts-grid/posts-grid';
import styles from './all-posts.module.css';

import type { TPosts } from '@/contracts/post';

export default function AllPosts({ posts }: { posts: TPosts }) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
