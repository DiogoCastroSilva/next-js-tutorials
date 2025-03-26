import Posts from '@/app/components/posts/posts';
import { getPosts } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Posts',
  description: 'Browse our latest posts!',
};

export default async function FeedPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
