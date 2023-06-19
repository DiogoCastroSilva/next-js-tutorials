import Link from 'next/link';
import { Layout } from '@/components/layout';

export default function EventPage() {
  return (
    <Layout>
      <div>
        <h1>Event</h1>
        <Link href="/events">
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}
