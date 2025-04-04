import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { EventList, EventsSearch } from '@/components/events';
import { ISearchTerms } from '@/components/events/events-search/contracts';
import { API_ENDPOINT, REVALIDATE_EVERY_MINUTE } from '@/config';

import type { TEvents } from '@/contracts/event';

export default function Events({ events }: { events: TEvents }) {
  const router = useRouter();

  function handleOnSearch({ year, month }: ISearchTerms) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>All Events | Next Events</title>
        <meta name="description" content="Find the all the events happening" />
      </Head>
      <main>
        <h1>All Events</h1>
        <EventsSearch onSearch={handleOnSearch} />
        <EventList events={events} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${API_ENDPOINT}/api/events`);

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
    revalidate: REVALIDATE_EVERY_MINUTE,
  };
}
