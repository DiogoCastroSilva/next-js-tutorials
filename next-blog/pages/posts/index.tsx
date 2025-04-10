import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog posts" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}></main>
      </div>
    </>
  );
}
