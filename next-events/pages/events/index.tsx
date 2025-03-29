import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { EventList, EventsSearch } from '@/components/events';
import { ISearchTerms } from '@/components/events/events-search/contracts';
import { getAllEvents } from '@/mocks/dummy-data';

export default function Events() {
  const router = useRouter();

  const events = getAllEvents();

  function handleOnSearch({ year, month }: ISearchTerms) {
    router.push(`/events/${year}/${month}`);
  }

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
        <EventsSearch onSearch={handleOnSearch} />
        <EventList events={events} />
      </main>
    </>
  );
}
