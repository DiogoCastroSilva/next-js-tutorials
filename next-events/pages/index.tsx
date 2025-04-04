import Head from 'next/head';

import EventsList from '@/components/events/event-list/events-list';
import { API_ENDPOINT, REVALIDATE_HALF_HOUR } from '@/config';

import type { TEvents } from '@/contracts/event';

export default function Home({ events }: { events: TEvents }) {
  return (
    <>
      <Head>
        <title>Featured Next Events</title>
        <meta
          name="description"
          content="Find the all the featured events happening"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Featured Events</h1>
        <EventsList events={events} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${API_ENDPOINT}/api/featured/events`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const events = await response.json();

  if (!events) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events },
    revalidate: REVALIDATE_HALF_HOUR,
  };
}
