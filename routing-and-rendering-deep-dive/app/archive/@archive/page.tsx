import Link from 'next/link';

import { getDateNow, convertDate } from '@/app/utils/date';

export const dynamic = 'force-dynamic';

const availableYears = [2024, 2023, 2022, 2021, 2020];

export default function ArchivePage() {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  const transformedYears = availableYears.map(
    (year) => `${year}-${convertDate(currentMonth)}-${convertDate(currentDay)}`
  );

  return (
    <header>
      <nav>
        <ul>
          {transformedYears.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
