import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog contact page" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}></main>
      </div>
    </>
  );
}
