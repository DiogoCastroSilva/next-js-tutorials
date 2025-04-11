import Image from 'next/image';

import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          alt="An image showing Diogo"
          src="/images/site/diogo.jpeg"
          width={300}
          height={300}
        />
      </div>
      <div>Hi, I am Diogo</div>
      <p>I blog about technology, spceially about frontend software</p>
    </section>
  );
}
