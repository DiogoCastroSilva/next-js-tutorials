import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layout';
import styles from '@/styles/Form.module.css';

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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(textInputs);
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
