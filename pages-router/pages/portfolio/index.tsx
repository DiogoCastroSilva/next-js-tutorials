import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Portfolio() {
  const router = useRouter();

  const handleLoadPortfolio = () => {
    router.push('/portfolio/1');
  };

  return (
    <>
      <Head>
        <title>Portfolio | Create Next App</title>
        <meta name="description" content="Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <h1>The Portfolio page</h1>
          <button onClick={handleLoadPortfolio}>Load portofoli 1</button>
        </main>
      </div>
    </>
  );
}
