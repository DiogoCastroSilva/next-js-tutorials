import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ClientProjectItem() {
  const router = useRouter();

  const projectId = router.query?.projectid;

  console.log(router.query);

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
          <h1>The Client project {projectId}</h1>
        </main>
      </div>
    </>
  );
}
