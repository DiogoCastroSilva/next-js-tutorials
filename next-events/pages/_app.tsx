import Head from 'next/head';

import MainLayout from '@/components/layout/main-layout/main-layout';
import { NotificationProvider } from '@/states/notification-context/notification-context';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <MainLayout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </NotificationProvider>
  );
}
