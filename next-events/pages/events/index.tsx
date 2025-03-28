import { EventList } from '@/components/events';
import { getAllEvents } from '@/mocks/dummy-data';
import Head from 'next/head';

export default function Events() {
  const events = getAllEvents();

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
        <EventList events={events} />
      </main>
    </>
  );
}
