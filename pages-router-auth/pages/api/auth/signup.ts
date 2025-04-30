// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import client from '@/lib/client';
import authDB from '@/lib/auth-db';
import { hashPassword } from '@/lib/auth-utils';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (
      !email ||
      !(typeof email === 'string' && email.includes('@')) ||
      !password ||
      !(typeof password === 'string' && password.trim().length > 5)
    ) {
      res.status(422).json({ message: 'Invalid request' });
      return;
    }

    try {
      await client.connect();

      const hashedPassword = await hashPassword(password);

      await authDB
        .collection('users')
        .insertOne({ email, password: hashedPassword });

      res.status(201).json({ message: 'Signed up!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  }
}
