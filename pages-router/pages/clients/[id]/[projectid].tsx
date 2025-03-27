import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ClientProjectItem() {
  const router = useRouter();

  console.log(router.query?.id);
  console.log(router.query?.projectid);

  return (
    <>
      <Head>
        <title>Client project item | Create Next App</title>
        <meta
          name="description"
          content="Please check the client project item"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Client project Item page</h1>
        </main>
      </div>
    </>
  );
}
