import MealsGrid from '@/app/components/meals-grid/meals-grid';
import { API_ENDPOINT } from '@/app/configs/api';

export default async function Meals() {
  const res = await fetch(`${API_ENDPOINT}/api/meals`);
  const meals = await res.json();

  return <MealsGrid meals={meals || []} />;
}
