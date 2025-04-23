import Head from 'next/head';

import Hero from '@/components/home/hero/hero';
import FeaturedPosts from '@/components/home/featured-posts/featured-posts';
import { getFeaturedPosts } from '@/lib/post-util';

import type { TPosts } from '@/contracts/post';

export default function Home({ posts }: { posts: TPosts }) {
  return (
    <>
      <Head>
        <title>Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog" />
      </Head>
      <main>
        <Hero />
        <FeaturedPosts posts={posts} />
      </main>
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
