import MealItem from '@/app/components/meal-item/meal-item';

import styles from './meals-grid.module.css';

import type { IMealsGrid } from './contracts';

export default function MealsGrid({ meals }: IMealsGrid) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
