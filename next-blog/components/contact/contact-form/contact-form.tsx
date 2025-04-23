import { FormEvent } from 'react';

import { API_ENDPOINT } from '@/config';

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
  function onSubmitHandler(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();

    const values = {
      email: event.currentTarget.elements.email.value,
      name: event.currentTarget.elements.name.value,
      message: event.currentTarget.elements.message.value,
    };

    fetch(`${API_ENDPOINT}/api/contact`, {
      method: 'POST',
      body: JSON.stringify({ ...values }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <section className={styles.contact}>
      <h2>How can I help you?</h2>
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
          <div className={styles.control}>
            <label htmlFor="message">Your Message</label>
            <textarea rows={5} id="message" required />
          </div>
          <div className={styles.actions}>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
