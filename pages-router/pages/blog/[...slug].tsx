import Head from 'next/head';
import { useRouter } from 'next/router';

export default function BlogPosts() {
  const router = useRouter();

  console.log(router.query?.slug);

  return (
    <>
      <Head>
        <title>Blog Posts | Create Next App</title>
        <meta
          name="description"
          content="Check the post in our blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Blog posts page</h1>
        </main>
      </div>
    </>
  );
}
