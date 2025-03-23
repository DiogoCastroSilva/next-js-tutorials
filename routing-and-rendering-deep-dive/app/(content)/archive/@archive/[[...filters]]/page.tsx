import { Suspense } from 'react';
import Link from 'next/link';

import { trasnformYearsToFilters } from '@/app/utils/filters';
import FilteredContent from '@/app/(content)/archive/@archive/[[...filters]]/filtered-content';

import styles from './page.module.css';

import type { IArchivePage } from './contracts';

export const dynamic = 'force-dynamic';

const availableYears = [2024, 2023, 2022, 2021, 2020];

export default async function ArchivePage({ params }: IArchivePage) {
  const { filters } = await params;
  const year = filters?.[0];

  const transformedYears = trasnformYearsToFilters(availableYears);

  if (year && !transformedYears.find(({ filter }) => filter === year)) {
    throw new Error('Invalid filter...');
  }

  return (
    <>
      <header className={styles.archiveHeader}>
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
      <Suspense fallback={<p>Loading filtered news...</p>}>
        <FilteredContent year={year} />
      </Suspense>
    </>
  );
}
