import { MongoClient, ServerApiVersion } from 'mongodb';

import { MONGO_DB_URL } from '@/config';

const client = new MongoClient(MONGO_DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
