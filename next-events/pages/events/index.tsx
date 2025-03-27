import Head from 'next/head';

const events = [
  { id: '1', title: 'Event 1' },
  { id: '2', title: 'Event 2' },
  { id: '3', title: 'Event 3' },
];

export default function Events() {
  return (
    <>
      <Head>
        <title>All Events | Next Events</title>
        <meta name="description" content="Find the all the events happening" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>All Events</h1>
        <ul>
          {events.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
