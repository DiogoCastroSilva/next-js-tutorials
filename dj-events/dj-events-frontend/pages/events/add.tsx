import Link from 'next/link';
import { Layout } from '@/components/layout';

export default function AddEventPage() {
  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
    </Layout>
  );
}
