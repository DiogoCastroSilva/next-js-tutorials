import MealsGrid from '@/app/components/meals-grid/meals-grid';

export default async function Meals() {
  const res = await fetch('http://localhost:3000/api/meals');
  const meals = await res.json();

  return <MealsGrid meals={meals || []} />;
}
