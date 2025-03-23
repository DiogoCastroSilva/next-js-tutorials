import { notFound } from 'next/navigation';
import Image from 'next/image';

import { INews } from '@/app/contracts/news';
import { API_ENDPOINT } from '@/app/configs/api';

import styles from './page.module.css';

export default async function ImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`${API_ENDPOINT}/api/news/${slug}`);
  const news = (await res.json()) as INews;

  if (!news) {
    return notFound();
  }

  return (
    <div className={styles.fullscreenImage}>
      <Image src={news?.image_url} alt={news?.summary} fill />
    </div>
  );
}
