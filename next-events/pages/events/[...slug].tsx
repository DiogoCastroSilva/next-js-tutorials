import Head from 'next/head';
import { useRouter } from 'next/router';

import { EventList } from '@/components/events';
import { getFilteredEvents } from '@/mocks/dummy-data';
import ResultTitle from '@/components/events/result-title/result-title';
import Button from '@/components/ui/button/button';
import ErrorAlert from '@/components/ui/error-alert/error-alert';

export default function FilteredEvents() {
  const router = useRouter();

  const slug = router.query.slug;
  const year = Number(slug?.[0]);
  const month = Number(slug?.[1]);

  console.log(slug);

  const isDateInvalid =
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month < 1 ||
    month > 12;

  const events = isDateInvalid ? null : getFilteredEvents({ year, month });
  const hasEvents = events && events.length > 0;

  return (
    <>
      <Head>
        <title>Filtered Event | Next Events</title>
        <meta
          name="description"
          content="Filtered events to match your search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!slug && <p className="center">Loading...</p>}
        {slug && isDateInvalid && (
          <>
            <ErrorAlert>
              <p>Invalid filter! Please adjust your values</p>
            </ErrorAlert>
            <div className="center">
              <Button link="/events">Show all events</Button>
            </div>
          </>
        )}
        {slug && !isDateInvalid && !hasEvents && (
          <>
            <ErrorAlert>
              <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className="center">
              <Button link="/events">Show all events</Button>
            </div>
          </>
        )}
        {!isDateInvalid && hasEvents && (
          <>
            <ResultTitle date={new Date(year, month - 1)} />
            <EventList events={events} />
          </>
        )}
      </main>
    </>
  );
}
