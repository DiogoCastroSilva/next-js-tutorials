'use client';

import { useRouter } from 'next/navigation';

import styles from './modal-backdrop.module.css';

export default function ModalBackdrop() {
  const router = useRouter();

  const handleOnGoBack = () => {
    router.back();
  };

  return <div className={styles.modalBackdrop} onClick={handleOnGoBack} />;
}
