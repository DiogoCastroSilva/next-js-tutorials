import { Fragment } from 'react';

import ImagePicker from '@/app/components/images-picker/images-picker';
import MealsFormSubmitButton from '@/app/components/meals-form-submit-button/meals-form-submit-button';
import { shareMeal } from '@/app/actions/share-actions';

import styles from './page.module.css';

export default function ShareMealPage() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={styles.main}>
        <form className={styles.form} action={shareMeal}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker name="image" label="Meal Image" />
          <p className={styles.actions}>
            <MealsFormSubmitButton />
          </p>
        </form>
      </main>
    </Fragment>
  );
}
