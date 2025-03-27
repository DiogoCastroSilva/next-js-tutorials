import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Welcome to our application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Home page</h1>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
            <li>
              <Link href={`/blog/${new Date().getFullYear()}`}>Blog</Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
