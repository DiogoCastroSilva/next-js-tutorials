import { ITrainingList } from '@/app/contracts/trainning';

import db from './db';

export function getTrainings(): ITrainingList {
  const stmt = db.prepare('SELECT * FROM trainings');

  return stmt.all();
}
