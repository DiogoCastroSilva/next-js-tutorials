import EventItem from '@/components/event-item/event-item';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { SingleEvent } from '@/models/events';

export default function EventsPage({ events }: { events: SingleEvent[] }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_ENDPOINT}/api/events?_sort=date:ASC`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occured please try again`);
  }

  const { data } = await res.json();

  return {
    props: {
      events: data,
    },
    revalidate: 1,
  };
}
