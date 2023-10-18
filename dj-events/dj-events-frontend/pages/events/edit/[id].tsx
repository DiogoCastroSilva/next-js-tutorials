import { ChangeEvent, FormEvent, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { FaImage } from 'react-icons/fa';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import { SingleEvent } from '@/models/events';
import styles from '@/styles/Form.module.css';

import 'react-toastify/dist/ReactToastify.css';

type ServerSideProps = GetServerSideProps<SingleEvent, { id: string }>;

const defaultValues = ({ attributes }: SingleEvent) => {
  const { name, performers, venue, date, time, description } = attributes || {};

  return {
    name: {
      id: 'name',
      name: 'name',
      label: 'Name',
      placeholder: 'Event name...',
      value: name,
    },
    performers: {
      id: 'performers',
      name: 'performers',
      label: 'Performers',
      placeholder: 'Performers name...',
      value: performers,
    },
    venue: {
      id: 'venue',
      name: 'venue',
      label: 'Venue',
      placeholder: 'Venue name...',
      value: venue,
    },
    date: {
      id: 'date',
      name: 'date',
      label: 'Date',
      placeholder: 'Date...',
      value: date,
      type: 'date',
    },
    time: {
      id: 'time',
      name: 'time',
      label: 'Time',
      placeholder: 'Time...',
      value: time,
    },
    description: {
      id: 'description',
      name: 'description',
      label: 'Description',
      placeholder: 'Description...',
      value: description,
      type: 'text-area',
    },
  };
};

export default function EditEventPage({
  event,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [textInputs, setTextInputs] = useState(defaultValues(event));
  const [imagePreview, setImagePreview] = useState(
    event.attributes.image.data
      ? event.attributes.image.data.attributes.formats.thumbnail.url
      : null
  );
  const router = useRouter();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(textInputs).some(
      (input) => input.value === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
      return;
    }

    const data = {
      data: {
        ...Object.keys(textInputs).reduce((acc, key) => {
          if (key === 'date') {
            acc[key] = new Date(textInputs[key].value).toISOString();
          } else {
            acc[key] = textInputs[key].value;
          }

          return acc;
        }, {}),
      },
    };

    // Submit
    const res = await fetch(`${API_ENDPOINT}/api/events/${event.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast.error('Something went wrong');
    } else {
      const { data } = await res.json();

      router.push(`/events/${data.attributes.slug}`);
    }
  };

  const handleOnChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTextInputs({
      ...textInputs,
      [name]: {
        ...textInputs[name],
        value,
      },
    });
  };

  console.log(event);

  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Edit Event</h1>
      <ToastContainer />
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <div className={styles.grid}>
          {Object.keys(textInputs).map((key) => {
            const { id, name, label, value, placeholder, type } =
              textInputs[key];

            return (
              <div key={key}>
                <label htmlFor="name">{label}</label>
                {type === 'text-area' && (
                  <textarea
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                  ></textarea>
                )}
                {type !== 'text-area' && (
                  <input
                    type={type || 'text'}
                    id={id}
                    name={name}
                    value={
                      type === 'date'
                        ? moment(value).format('yyyy-MM-dd')
                        : value
                    }
                    placeholder={placeholder}
                    onChange={handleOnChange}
                  />
                )}
              </div>
            );
          })}
        </div>
        <input type="submit" value="Update Event" className="btn" />
      </form>
      <h2>Event Image</h2>
      {imagePreview ? (
        <Image alt="Event Image" src={imagePreview} width={170} height={100} />
      ) : (
        <div>
          <p>No image uploaded</p>
        </div>
      )}
      <div>
        <button className="btn-secondary">
          <FaImage /> Set Image
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps: ServerSideProps = async ({ params }) => {
  const { id } = params || {};
  const res = await fetch(`${API_ENDPOINT}/api/events/${id}?populate=*`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    console.error(res.statusText);
    throw new Error(`An error occured please try again`);
  }

  const { data } = (await res.json()) || {};

  return {
    props: {
      event: data,
    },
  };
};
