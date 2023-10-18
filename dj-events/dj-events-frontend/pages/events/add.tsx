import { Layout } from '@/components/layout';
import { API_ENDPOINT } from '@/config';
import styles from '@/styles/Form.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const defaultValues = {
  name: {
    id: 'name',
    name: 'name',
    label: 'Name',
    placeholder: 'Event name...',
    value: '',
  },
  performers: {
    id: 'performers',
    name: 'performers',
    label: 'Performers',
    placeholder: 'Performers name...',
    value: '',
  },
  venue: {
    id: 'venue',
    name: 'venue',
    label: 'Venue',
    placeholder: 'Venue name...',
    value: '',
  },
  date: {
    id: 'date',
    name: 'date',
    label: 'Date',
    placeholder: 'Date...',
    value: '',
  },
  time: {
    id: 'time',
    name: 'time',
    label: 'Time',
    placeholder: 'Time...',
    value: '',
  },
  description: {
    id: 'description',
    name: 'description',
    label: 'Description',
    placeholder: 'Description...',
    value: '',
    type: 'text-area',
  },
};

export default function AddEventPage() {
  const [textInputs, setTextInputs] = useState(defaultValues);
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
    const res = await fetch(`${API_ENDPOINT}/api/events`, {
      method: 'POST',
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

  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <div className={styles.grid}>
          {Object.keys(textInputs).map((key) => {
            const { id, name, label, value, placeholder, type } =
              textInputs[key];

            return (
              <div key={key}>
                <label htmlFor="name">{label}</label>
                {type && type === 'text-area' && (
                  <textarea
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                  ></textarea>
                )}
                {!type && (
                  <input
                    type="text"
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                  />
                )}
              </div>
            );
          })}
        </div>
        <input type="submit" value="Add Event" className="btn" />
      </form>
    </Layout>
  );
}
