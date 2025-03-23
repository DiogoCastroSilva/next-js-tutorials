import NewsList from '@/app/components/news-list/news-list';
import { API_ENDPOINT } from '@/app/configs/api';
import { INewsList } from '@/app/contracts/news';

export default async function NewsListContainer() {
  const res = await fetch(`${API_ENDPOINT}/api/news`);
  const news = (await res.json()) as INewsList;

  return <NewsList news={news} />;
}
