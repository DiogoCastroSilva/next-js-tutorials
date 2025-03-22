import Link from 'next/link';

import { getDateNow, convertDate } from '@/app/utils/date';
import { API_ENDPOINT } from '@/app/configs/api';
import { INewsList } from '@/app/contracts/news';
import NewsList from '@/app/components/news-list/news-list';

export const dynamic = 'force-dynamic';

const availableYears = [2024, 2023, 2022, 2021, 2020];

export default async function ArchivePage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const transformedYears = availableYears.map((year) => ({
    label: year,
    link: `/archive/${year}-${convertDate(currentMonth)}-${convertDate(
      currentDay
    )}`,
  }));

  const { year } = await params;

  const res = await fetch(`${API_ENDPOINT}/api/news/year/${year}`);
  const news = (await res.json()) as INewsList;

  let NewsContent = <NewsList news={news} />;

  if (!Array.isArray(news) || news.length <= 0) {
    NewsContent = <p>No news available for the selected time</p>;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {transformedYears.map(({ label, link }) => (
              <li key={link}>
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {NewsContent}
    </>
  );
}
