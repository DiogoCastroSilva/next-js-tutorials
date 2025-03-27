import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Find the next event happening" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next Events</h1>
      </main>
    </>
  );
}
