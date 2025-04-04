import Head from 'next/head';
import { GetServerSidePropsContext } from 'next';

import { EventList } from '@/components/events';
import ResultTitle from '@/components/events/result-title/result-title';
import Button from '@/components/ui/button/button';
import ErrorAlert from '@/components/ui/error-alert/error-alert';
import { API_ENDPOINT } from '@/config';
import { TEvents } from '@/contracts/event';

export default function FilteredEvents({
  events,
  year,
  month,
  isDateInvalid,
}: {
  events: TEvents;
  year: number;
  month: number;
  isDateInvalid: boolean;
}) {
  const hasEvents = events && events.length > 0;

  return (
    <>
      <Head>
        <title>Filtered Event | Next Events</title>
        <meta
          name="description"
          content={`Events filtered by the month ${month} and year ${year}`}
        />
      </Head>
      <main>
        {!events && !isDateInvalid && <p className="center">Loading...</p>}
        {isDateInvalid && (
          <>
            <ErrorAlert>
              <p>Invalid filter! Please adjust your values</p>
            </ErrorAlert>
            <div className="center">
              <Button link="/events">Show all events</Button>
            </div>
          </>
        )}
        {!isDateInvalid && !hasEvents && (
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

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ slug: string[] }>
) {
  const { params } = context;

  const slug = params?.slug;
  const year = Number(slug?.[0]);
  const month = Number(slug?.[1]);
  const query = `?year=${year}&month=${month}`;

  const response = await fetch(`${API_ENDPOINT}/api/events${query}`);

  if (!response.ok) {
    const error = await response.json();

    if (error?.message) {
      const { message } = error;

      if (message === 'Invalid filter') {
        return {
          props: { isDateInvalid: true },
        };
      }
    }

    return {
      notFound: true,
    };
  }

  const events = await response.json();

  return {
    props: { events, year, month },
  };
}
