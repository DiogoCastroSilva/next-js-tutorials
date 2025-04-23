import Head from 'next/head';

import PostDetails from '@/components/posts/post-details/post-details';

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | Diogo NextJs Blog</title>
        <meta name="description" content="Post about..." />
      </Head>
      <main>
        <PostDetails />
      </main>
    </>
  );
}
