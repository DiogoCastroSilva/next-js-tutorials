import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Showcase } from '@/components/showcase';
import '@/styles/globals.css';

import { ILayout } from './contracts';

export default function Layout({
  title,
  description,
  keywords,
  children,
}: ILayout) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
};
