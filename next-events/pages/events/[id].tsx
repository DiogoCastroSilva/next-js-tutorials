import Head from 'next/head';
import { useRouter } from 'next/router';

const event = {
  id: 'id',
  title: 'Event 1',
  description: 'This is a first event',
};

export default function EventDetails() {
  const router = useRouter();

  const eventId = router.query.id;

  return (
    <>
      <Head>
        <title>Event | Next Events</title>
        <meta
          name="description"
          content="Find more about the event happening"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </main>
    </>
  );
}
