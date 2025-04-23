import Head from 'next/head';

import AllPosts from '@/components/posts/all-posts/all-posts';
import { getAllPosts } from '@/lib/post-util';

import type { TPosts } from '@/contracts/post';

export default function Posts({ posts }: { posts: TPosts }) {
  return (
    <>
      <Head>
        <title>Posts | Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog posts" />
      </Head>
      <main>
        <AllPosts posts={posts} />
      </main>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
