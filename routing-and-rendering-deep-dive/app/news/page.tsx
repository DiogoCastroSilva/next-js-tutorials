import { Metadata } from 'next';

import NewsList from '@/app/components/news-list/news-list';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'News',
  description: 'Get the latest news from around the world.',
};

export default async function NewsPage() {
  return (
    <main className={styles.container}>
      <h1>Current News</h1>
      <NewsList />
    </main>
  );
}
