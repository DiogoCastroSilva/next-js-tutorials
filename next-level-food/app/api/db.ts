import path from 'path';
import Database from 'better-sqlite3';

const dbPath = path.join(`${process.cwd()}/app/db`, 'meals.db');

const db = new Database(dbPath);

export default db;
