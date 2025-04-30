// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/react';

import authDB from '@/lib/auth-db';
import client from '@/lib/client';

import { hashPassword, verifyPassword } from '@/lib/auth-utils';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PATCH') {
    try {
      const session = await getSession({ req });
      const email = session?.user?.email;

      if (!session || !email) {
        res.status(401).json({ message: 'Not authenticated' });
        return;
      }

      const { oldPassword, newPassword } = req.body;

      await client.connect();

      const usersCollection = authDB.collection('users');

      const existingUser = await usersCollection.findOne({ email });

      if (!existingUser) {
        throw new Error('User not found');
      }

      const isValid = await verifyPassword(oldPassword, existingUser.password);

      if (!isValid) {
        throw new Error('Invalid password');
      }

      const hashedPassword = await hashPassword(newPassword);

      await usersCollection.updateOne(
        { email },
        { $set: { password: hashedPassword } }
      );

      res.status(200).json({ message: 'Password updated!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  }
}
