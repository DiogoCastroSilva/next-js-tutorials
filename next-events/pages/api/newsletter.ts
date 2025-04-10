// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import client from '@/lib/client';
import eventsDB from '@/lib/events-db';

type IMessage = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage>
) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email || !(typeof email === 'string' && email.includes('@'))) {
      res.status(422).json({ message: 'Invalid email address' });
      return;
    }

    try {
      await client.connect();

      await eventsDB.collection('emails').insertOne({ email });

      res.status(201).json({ message: 'Signed up!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }

    return;
  }

  res.status(404).json({ message: 'Route not found' });
}
