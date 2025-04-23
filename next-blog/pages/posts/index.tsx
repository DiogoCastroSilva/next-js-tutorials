import Head from 'next/head';

import AllPosts from '@/components/posts/all-posts/all-posts';

import type { TPosts } from '@/contracts/post';

const DUMMY_POSTS: TPosts = [
  {
    id: 'getting-started-nextjs',
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a React framework that enables several extra features, including server-side rendering and generating static websites.',
    date: '2023-10-01',
  },
  {
    id: 'nextjs-file-based-routing',
    title: 'NextJS File-Based Routing',
    image: 'nextjs-file-based-routing.png',
    excerpt:
      'NextJS uses a file-based routing system, which means that the file structure of your project determines the routes of your application.',
    date: '2023-10-02',
  },
];

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog posts" />
      </Head>
      <main>
        <AllPosts posts={DUMMY_POSTS} />
      </main>
    </>
  );
}
