import { cache } from 'react';
import { unstable_cache as nextCache } from 'next/cache';
import sql from 'better-sqlite3';

import type { IMessage } from '@/contracts/message';

const db = new sql('messages.db');

function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      text TEXT
    )`);
}

initDb();

export function addMessage(message: string) {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export const getMessages = nextCache(
  cache(() =>
    Promise.resolve(db.prepare('SELECT * FROM messages').all() as IMessage[])
  ),
  ['messages'],
  { tags: ['messages'] }
);
