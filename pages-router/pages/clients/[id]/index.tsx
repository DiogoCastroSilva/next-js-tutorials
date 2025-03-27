import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Client() {
  const router = useRouter();

  console.log(router.query?.id);

  return (
    <>
      <Head>
        <title>Client | Create Next App</title>
        <meta
          name="description"
          content="Check the client information"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Client page</h1>
        </main>
      </div>
    </>
  );
}
