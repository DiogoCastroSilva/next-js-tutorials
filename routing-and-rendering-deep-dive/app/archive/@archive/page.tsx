import Link from 'next/link';

import { getDateNow, convertDate } from '@/app/utils/date';

export const dynamic = 'force-dynamic';

const availableYears = [2024, 2023, 2022, 2021, 2020];

export default function ArchivePage() {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const transformedYears = availableYears.map((year) => ({
    label: year,
    link: `/archive/${year}-${convertDate(currentMonth)}-${convertDate(
      currentDay
    )}`,
  }));

  return (
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
  );
}
