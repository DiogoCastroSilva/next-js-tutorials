import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.jpg';
import { NEWS } from '@/app/configs/routes';

export default function HomePage() {
  return (
    <div id="home">
      <Image src={logo.src} width={128} height={128} alt="A newspaper" />
      <h1>A Space News Site For The Next Generation</h1>
      <p>
        Next News is here to deliver you all the latest space news - concise &
        unbiased!
      </p>
      <p>
        NextNews aims to provide you with the latest apce news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>
      <p>
        We employ a team of dedicated journalists who are committed to
        delivering the news in a fair and unbiased manner. Our team is
        passionate about keeping you informed and up to date with the latest
        news.
      </p>
      <p>
        <Link href={NEWS}>Read the latest space news</Link>
      </p>
    </div>
  );
}
