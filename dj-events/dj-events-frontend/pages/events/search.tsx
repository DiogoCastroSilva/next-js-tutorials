import qs from 'qs';
import EventItem from '@/components/event-item/event-item';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { SingleEvent } from '@/models/events';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SearchPage({ events }: { events: SingleEvent[] }) {
  const {
    query: { term },
  } = useRouter();

  return (
    <Layout title="Search Results">
      <Link href='/events'>Go Back</Link>
      <h1>Search Results for {term}</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.length > 0 &&
        events.map((event) => <EventItem key={event.id} {...event} />)}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    filters: {
      $or: [
        { name: { $contains: term } },
        { performers: { $contains: term } },
        { description: { $contains: term } },
        { venue: { $contains: term } },
      ],
    },
  });

  const res = await fetch(`${API_ENDPOINT}/api/events?${query}&populate=*`, {
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
  };
};
