import { ReactNode } from 'react';

import styles from './layout.module.css';

export default function Layout({
  archive,
  latest,
}: {
  archive: ReactNode;
  latest: ReactNode;
}) {
  return (
    <main>
      <h1>News Archived on this day</h1>
      <section id="archive-filter" className={styles.archiveFilter}>
        {archive}
      </section>
      <section id="archive-latest">{latest}</section>
    </main>
  );
}
