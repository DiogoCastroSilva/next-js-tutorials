import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

import EventContent from '@/components/events/event-detail/event-content';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventSummary from '@/components/events/event-detail/event-summary';
import ErrorAlert from '@/components/ui/error-alert/error-alert';
import { API_ENDPOINT, REVALIDATE_HALF_MINUTE } from '@/config';

import type { IEvent } from '@/contracts/event';

export default function EventDetails({ event }: { event: IEvent }) {
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
        {!event && (
          <ErrorAlert>
            <p>Event not found</p>
          </ErrorAlert>
        )}
        {event && (
          <>
            <EventSummary title={event.title} />
            <EventLogistics
              date={event.date}
              address={event.location}
              image={event.image}
              imageAlt={event.description}
            />
            <EventContent>
              <p>{event.description}</p>
            </EventContent>
          </>
        )}
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${API_ENDPOINT}/api/featured/events`);
  const events = await response.json();

  const paths = events.map((event: IEvent) => ({
    params: { id: event.id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const id = context.params?.id;
  const response = await fetch(`${API_ENDPOINT}/api/events/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const event = await response.json();

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
    revalidate: REVALIDATE_HALF_MINUTE,
  };
}
