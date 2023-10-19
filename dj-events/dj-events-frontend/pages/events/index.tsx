import EventItem from '@/components/event-item/event-item';
import { Layout } from '@/components/layout';
import { Pagination } from '@/components/pagination';
import { API_ENDPOINT, PER_PAGE } from '@/config';
import { SingleEvent } from '@/models/events';

export default function EventsPage({
  events,
  count,
  page,
}: {
  events: SingleEvent[];
  count: number;
  page: number;
}) {

  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
      <Pagination page={page} count={count} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const res = await fetch(
    `${API_ENDPOINT}/api/events?_sort=date:ASC&populate=*&pagination[limit]=${PER_PAGE}&pagination[start]=${start}&pagination[withCount]=true`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occured please try again`);
  }

  const { data, meta } = await res.json();

  return {
    props: {
      events: data,
      page: +page,
      count: meta.pagination.total,
    },
  };
}
