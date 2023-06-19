import Head from 'next/head';
import styles from '@/styles/Layout.module.css';

import { ILayout } from './contracts';

export default function Layout({
  title,
  description,
  keywords,
  children,
}: ILayout) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
};
