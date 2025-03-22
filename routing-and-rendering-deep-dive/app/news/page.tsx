import { Metadata } from 'next';

import NewsList from '@/app/components/news-list-container/news-list-container';

export const metadata: Metadata = {
  title: 'News',
  description: 'Get the latest news from around the world.',
};

export default async function NewsPage() {
  return (
    <main>
      <h1>Current News</h1>
      <NewsList />
    </main>
  );
}
