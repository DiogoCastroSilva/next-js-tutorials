import NewsList from '@/app/components/news-list/news-list';
import { API_ENDPOINT } from '@/app/configs/api';
import { INewsList } from '@/app/contracts/news';

export default async function FilteredNewsPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;

  const res = await fetch(`${API_ENDPOINT}/api/news/year/${year}`);
  const news = (await res.json()) as INewsList;

  if (!Array.isArray(news) || news.length <= 0) {
    return <p>No news available for the selected time</p>;
  }

  return <NewsList news={news} />;
}
