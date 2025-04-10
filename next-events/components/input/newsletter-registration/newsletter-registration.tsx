import { useRef } from 'react';

import { API_ENDPOINT } from '@/config';

import styles from './newsletter-registration.module.css';

export default function NewsletterRegistration() {
  const emailRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef?.current?.value;

    if (!email) {
      return;
    }

    fetch(`${API_ENDPOINT}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
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
