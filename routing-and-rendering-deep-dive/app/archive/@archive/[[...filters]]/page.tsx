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
  params: Promise<{ filters: string[] }>;
}) {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const transformedYears = availableYears.map((year) => {
    const yearFilter = `${year}-${convertDate(currentMonth)}-${convertDate(
      currentDay
    )}`;

    return {
      label: year,
      link: `/archive/${yearFilter}`,
      filter: yearFilter,
    };
  });

  const { filters } = await params;
  const year = filters?.[0];

  if (year && !transformedYears.find(({ filter }) => filter === year)) {
    console.log(year, transformedYears);
    throw new Error('Invalid filter...');
  }

  const res = await fetch(`${API_ENDPOINT}/api/news/year/${year}`);
  const news = (await res.json()) as INewsList;

  let NewsContent;

  if (!Array.isArray(news) || news.length <= 0) {
    NewsContent = <p>No news available for the selected time</p>;
  } else {
    NewsContent = <NewsList news={news} />;
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
