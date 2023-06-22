import EventItem from '@/components/event-item/event-item';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { SingleEvent } from '@/models/events';
import Link from 'next/link';

export default function HomePage({ events }: { events: SingleEvent[] }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
      {events.length > 0 && (
        <Link href="/events" className="btn-secondary">
          View All Events
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_ENDPOINT}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events.slice(0, 3), // Limit by 3 events
    },
    revalidate: 1,
  };
}
