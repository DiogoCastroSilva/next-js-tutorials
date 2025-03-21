import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { API_ENDPOINT } from '@/app/configs/api';
import { INews } from '@/app/contracts/news';

import styles from './page.module.css';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetch(`${API_ENDPOINT}/api/news/${slug}`);
  const meal = (await data.json()) as INews;

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await fetch(`${API_ENDPOINT}/api/news/${slug}`);
  const meal = (await data.json()) as INews;

  if (!meal) {
    notFound();
  }

  const { title, image_url, authors, summary, url } = meal;

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <div className={styles.imageContainer}>
          <Image src={image_url} alt={title} objectFit="cover" fill />
        </div>
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>By {authors?.[0]?.name}</p>
          <p>{summary}</p>
          <Link href={url} target="_blank" className={styles.articleLink}>
            Read more here
          </Link>
        </div>
      </article>
    </main>
  );
}
