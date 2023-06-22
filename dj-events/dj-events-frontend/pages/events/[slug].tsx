import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { SingleEvent } from '@/models/events';
import styles from '@/styles/Event.module.css';

type StaticProps = GetStaticProps<SingleEvent, { slug: string }>;

export default function EventPage({
  name,
  id,
  date,
  time,
  image,
  performers,
  description,
  venue,
  address,
}: InferGetStaticPropsType<StaticProps>) {
  const deleteEvent = () => {
    console.log('delete');
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
          {date} at {time}
        </span>
        <h1>{name}</h1>
        {image && (
          <div className={styles.image}>
            <Image src={image} alt={name} width={960} height={600} />
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
  const res = await fetch(`${API_ENDPOINT}/api/events`);
  const musicEvents = (await res.json()) as SingleEvent[];
  const paths = musicEvents.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: StaticProps = async ({ params }) => {
  const res = await fetch(`${API_ENDPOINT}/api/events/${params?.slug}`);
  const event = (await res.json()) as SingleEvent;

  return {
    props: {
      ...event,
    },
    revalidate: 1,
  };
};
