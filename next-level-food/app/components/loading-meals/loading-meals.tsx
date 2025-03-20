import styles from './loading-meals.module.css';

export default function LoadingMeals() {
  return <p className={styles.loading}>Fetching meals...</p>;
}
