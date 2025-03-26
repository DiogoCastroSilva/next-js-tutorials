import db from '@/lib/db';

export function createUser(email: string, password: string) {
  const res = db
    .prepare(`INSERT into users (email, password) VALUES (?, ?)`)
    .run(email, password);

  return res.lastInsertRowid;
}
