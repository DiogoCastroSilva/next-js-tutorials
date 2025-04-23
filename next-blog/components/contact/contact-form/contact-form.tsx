import { FormEvent, useEffect, useState } from 'react';

import { API_ENDPOINT } from '@/config';
import { INotification } from '@/components/ui/notification/contracts';
import Notification from '@/components/ui/notification/notification';

import styles from './contact-form.module.css';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  name: HTMLInputElement;
  message: HTMLTextAreaElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function ContactForm() {
  const [notification, setNotification] = useState<INotification | null>(null);

  useEffect(() => {
    if (
      notification &&
      (notification.status === 'success' || notification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  async function onSubmitHandler(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();

    const values = {
      email: event.currentTarget.elements.email.value,
      name: event.currentTarget.elements.name.value,
      message: event.currentTarget.elements.message.value,
    };

    try {
      const response = await fetch(`${API_ENDPOINT}/api/contact`, {
        method: 'POST',
        body: JSON.stringify({ ...values }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setNotification({
        title: 'Success!',
        message: 'Contact information saved successfully!',
        status: 'success',
      });
    } catch {
      setNotification({
        title: 'Error!',
        message: 'Failed to save contact information',
        status: 'error',
      });
    }
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea rows={5} id="message" required />
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}
