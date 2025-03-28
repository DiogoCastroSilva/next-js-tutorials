import Head from 'next/head';
import { useRouter } from 'next/router';

import { getEventById } from '@/mocks/dummy-data';
import EventSummary from '@/components/events/event-detail/event-summary';
import EventLogistics from '@/components/events/event-detail/event-logistics';
import EventContent from '@/components/events/event-detail/event-content';

export default function EventDetails() {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId as string);

  if (!event) {
    return <p>Event not found</p>;
  }

  const { title, date, location, image, description  } = event;

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
        <EventSummary title={title} />
        <EventLogistics
          date={date}
          address={location}
          image={image}
          imageAlt={description}
        />
        <EventContent><p>{description}</p></EventContent>
      </main>
    </>
  );
}
