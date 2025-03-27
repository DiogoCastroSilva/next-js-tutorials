import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Client() {
  const router = useRouter();

  const clientName = router.query?.id;

  const projects = [
    { id: 'project1', name: 'Project 1' },
    { id: 'project2', name: 'Project 2' },
  ];

  return (
    <>
      <Head>
        <title>Client | Create Next App</title>
        <meta name="description" content="Check the client information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Client {clientName} page</h1>
          <ul>
            {projects.map(({ id, name }) => (
              <li key={id}>
                <Link
                  href={{
                    pathname: '/clients/[id]/[projectid]',
                    query: { id: router.query?.id, projectid: id },
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
