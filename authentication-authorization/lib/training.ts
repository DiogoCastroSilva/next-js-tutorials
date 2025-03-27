'use server';

import { TTrainingList } from '@/contracts/training';

import db from './db';
import { verifySession } from '@/lib/session';

export async function getTrainings() {
  const session = await verifySession();

  if (!session) return null;

  const stmt = db.prepare('SELECT * FROM trainings');

  return stmt.all() as TTrainingList;
}
