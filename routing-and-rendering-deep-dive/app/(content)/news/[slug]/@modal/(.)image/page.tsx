import Image from 'next/image';
import { notFound } from 'next/navigation';

import { API_ENDPOINT } from '@/app/configs/api';
import { INews } from '@/app/contracts/news';
import ModalBackdrop from '@/app/components/modal-backdrop/modal-backdrop';

import styles from './page.module.css';
import imageStyles from '../../image/page.module.css';

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
    <>
      <ModalBackdrop />
      <dialog className={styles.modal} open>
        <div className={imageStyles.fullscreenImage}>
          <Image src={news?.image_url} alt={news?.summary} fill />
        </div>
      </dialog>
    </>
  );
}
