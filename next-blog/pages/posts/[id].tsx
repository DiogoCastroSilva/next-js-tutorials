import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | Diogo NextJs Blog</title>
        <meta name="description" content="Post about..." />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}></main>
      </div>
    </>
  );
}
