import Head from 'next/head';
import { useRouter } from 'next/router';

import EventContent from '@/components/events/event-detail/event-content';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventSummary from '@/components/events/event-detail/event-summary';
import ErrorAlert from '@/components/ui/error-alert/error-alert';
import { getEventById } from '@/mocks/dummy-data';

export default function EventDetails() {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId as string);

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
