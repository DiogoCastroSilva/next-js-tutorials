import Head from 'next/head';

import Hero from '@/components/home/hero/hero';
import FeaturedPosts from '@/components/home/featured-posts/featured-posts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog" />
      </Head>
        <main>
          <Hero />
          <FeaturedPosts />
        </main>
    </>
  );
}
