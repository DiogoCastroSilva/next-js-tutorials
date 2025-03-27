import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found | Create Next App</title>
        <meta
          name="description"
          content="The page you are looking for is not found"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>Not Found</h1>
          <p>The page you are looking for is not found</p>
        </main>
      </div>
    </>
  );
}
