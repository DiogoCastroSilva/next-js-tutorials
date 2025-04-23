import Head from 'next/head';

import ContactForm from '@/components/contact/contact-form/contact-form';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Diogo NextJs Blog</title>
        <meta name="description" content="Diogo Next js Blog contact page" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </>
  );
}
