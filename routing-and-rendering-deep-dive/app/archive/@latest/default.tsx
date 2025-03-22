import { API_ENDPOINT } from '@/app/configs/api';
import { INewsList } from '@/app/contracts/news';
import NewsList from '@/app/components/news-list/news-list';
import { getDateNow, convertDate } from '@/app/utils/date';

export const dynamic = 'force-dynamic';

export default async function LatestPage() {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  const currentYear = today.getFullYear();
  const year = `${currentYear}-${convertDate(currentMonth)}-${convertDate(
    currentDay
  )}`;

  const res = await fetch(`${API_ENDPOINT}/api/news/year/${year}`);
  const news = (await res.json()) as INewsList;

  return (
    <>
      <h1>Latest</h1>
      <NewsList news={news} />
    </>
  );
}
