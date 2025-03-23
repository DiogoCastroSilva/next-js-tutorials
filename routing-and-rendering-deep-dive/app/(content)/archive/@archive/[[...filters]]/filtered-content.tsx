import { API_ENDPOINT } from '@/app/configs/api';
import NewsList from '@/app/components/news-list/news-list';

import type { INewsList } from '@/app/contracts/news';
import type { IFilteredContent } from './contracts';

export default async function FilteredContent({ year }: IFilteredContent) {
  const res = await fetch(`${API_ENDPOINT}/api/news/year/${year}`);
  const news = (await res.json()) as INewsList;

  if (!Array.isArray(news) || news.length <= 0) {
    return <p>No news available for the selected time</p>;
  } else {
    return <NewsList news={news} />;
  }
}
