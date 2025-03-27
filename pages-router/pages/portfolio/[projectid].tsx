import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PortfolioItem() {
  const router = useRouter();

  console.log(router.query?.projectid);

  return (
    <>
      <Head>
        <title>Portfolio item | Create Next App</title>
        <meta name="description" content="Please check our portfolio item" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Portfolio Item page</h1>
        </main>
      </div>
    </>
  );
}
