import { FormEvent, useRef } from 'react';

import { API_ENDPOINT } from '@/config';
import useNotifications from '@/hooks/use-notifications';

import styles from './newsletter-registration.module.css';

export default function NewsletterRegistration() {
  const emailRef = useRef<HTMLInputElement>(null);
  const { showNotification } = useNotifications();

  async function registrationHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email = emailRef?.current?.value;

    if (!email) {
      return;
    }

    try {
      const response = await fetch(`${API_ENDPOINT}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      showNotification({
        title: 'Success!',
        message: 'Successfully registered for newsletter!',
        status: 'success',
      });
    } catch {
      showNotification({
        title: 'Error!',
        message: 'Something went wrong!',
        status: 'error',
      });
    }
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}
