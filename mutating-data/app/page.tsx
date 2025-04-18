import { Suspense } from 'react';
import { Metadata } from 'next';

import Posts from '@/app/components/posts/posts';
import { getPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Latest Posts',
  description: 'Browse our latest posts!',
};

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&apos;s what you might&apos;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts />
        </Suspense>
      </section>
    </>
  );
}
