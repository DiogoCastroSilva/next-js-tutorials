import Head from 'next/head';

import PostDetails from '@/components/posts/post-details/post-details';
import { GetStaticPropsContext } from 'next';
import { getAllPosts, getPostsData } from '@/lib/post-util';
import { IPost } from '@/contracts/post';

export default function Post({ post }: { post: IPost }) {
  return (
    <>
      <Head>
        <title>Post | Diogo NextJs Blog</title>
        <meta name="description" content="Post about..." />
      </Head>
      <main>
        <PostDetails {...post} />
      </main>
    </>
  );
}

export function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const { params } = context;

  const post = getPostsData(params?.id as string);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({ params: { id: post.id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}
