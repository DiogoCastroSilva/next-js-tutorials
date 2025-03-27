import { redirect } from 'next/navigation';

import { verifySession } from '@/lib/session';
import { getTrainings } from '@/lib/training';

export default async function TrainingPage() {
  const session = await verifySession();

  if (!session) {
    console.log('No access to training');
    redirect('/');
  }

  const trainingSessions = await getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions?.map(({ id, image, title, description }) => (
          <li key={id}>
            <img src={`/trainings/${image}`} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
