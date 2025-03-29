import Head from 'next/head';

export default function FilteredEvents() {
  return (
    <>
      <Head>
        <title>Filtered Event | Next Events</title>
        <meta
          name="description"
          content="Filtered events to match your search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Filtered Events</h1>
      </main>
    </>
  );
}
