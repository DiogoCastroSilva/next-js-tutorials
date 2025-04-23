// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from '@/lib/client';
import blogDB from '@/lib/blog-db';

import type { NextApiRequest, NextApiResponse } from 'next';

type IMessage = { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim('') === '' ||
      !message ||
      message.trim('') === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      await client.connect();

      await blogDB.collection('messages').insertOne(newMessage);

      res.status(201).json({
        message: 'Message saved!',
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }
  }
}
