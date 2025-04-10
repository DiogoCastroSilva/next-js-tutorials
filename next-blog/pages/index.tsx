import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}></main>
      </div>
    </>
  );
}
