import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { SingleEvent } from '@/models/events';
import styles from '@/styles/Event.module.css';

import 'react-toastify/dist/ReactToastify.css';

type StaticProps = GetStaticProps<SingleEvent, { slug: string }>;

export default function EventPage({
  attributes: {
    name,
    date,
    time,
    image,
    performers,
    description,
    venue,
    address,
  },
  id,
}: InferGetStaticPropsType<StaticProps>) {
  const router = useRouter();

  const deleteEvent = async () => {
    if (confirm('Are you sure')) {
      const res = await fetch(`${API_ENDPOINT}/api/events/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/events');
      }
    }
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${id}`}>
            <FaPencilAlt /> Edit Event
          </Link>
          <a href="#" onClick={deleteEvent} className={styles.delete}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {new Date(date).toLocaleDateString('en-US')} at {time}
        </span>
        <h1>{name}</h1>
        <ToastContainer />
        {image && (
          <div className={styles.image}>
            <Image
              src={image.data?.attributes.formats.medium.url}
              alt={
                image.data?.attributes.alternativeText ||
                image.data?.attributes.name
              }
              width={960}
              height={600}
              priority
            />
          </div>
        )}
        <h3>Performers:</h3>
        <p>{performers}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Venue: {venue}</h3>
        <p>{address}</p>
        <Link href={`/events`} className={styles.back}>
          {'<'} Back
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_ENDPOINT}/api/events?_sort=date:ASC`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occured please try again`);
  }

  const { data } = (await res.json()) as { data: SingleEvent[] };

  const paths = data.map(({ attributes: { slug } }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // false or "blocking"
  };
};

export const getStaticProps: StaticProps = async ({ params }) => {
  const res = await fetch(
    `${API_ENDPOINT}/api/events?filters[slug][$eq]=${params?.slug}&populate=*`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occured please try again`);
  }

  const { data } = (await res.json()) as { data: SingleEvent[] };

  return {
    props: {
      ...data[0],
    },
    revalidate: 1,
  };
};
