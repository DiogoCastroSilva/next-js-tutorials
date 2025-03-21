import NewsCard from '@/app/components/news-card/news-card';
import { API_ENDPOINT } from '@/app/configs/api';
import { INewsList } from '@/app/contracts/news';

import styles from './news-list.module.css';

export default async function NewsList() {
  const res = await fetch(`${API_ENDPOINT}/api/news`);
  const news = (await res.json()) as INewsList;

  return (
    <ul className={styles.container}>
      {news.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </ul>
  );
}
