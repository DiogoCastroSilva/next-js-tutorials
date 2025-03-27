import Head from 'next/head';
import Link from 'next/link';

export default function Clients() {
  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'leo', name: 'Leo' },
    { id: 'john', name: 'John' },
  ];

  return (
    <>
      <Head>
        <title>Clients | Create Next App</title>
        <meta name="description" content="Please check our clients list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Clients List page</h1>
          <ul>
            {clients.map(({ id, name }) => (
              <li key={id}>
                <Link href={`/clients/${name}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
