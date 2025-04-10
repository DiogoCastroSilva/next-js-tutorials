// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import eventsDB from '@/lib/events-db';

import type { IComment } from '@/contracts/comment';
import client from '@/lib/client';

type IMessage = { message: string };
type ICommentResponse = { comment: IComment } & IMessage;
type ICommentsResponse = { comments: IComment[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage | ICommentResponse | ICommentsResponse>
) {
  const eventId = req.query.eventId as string;

  if (!eventId) {
    res.status(404).json({ message: 'Invalid event id' });
    return;
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim('') === '' ||
      !text ||
      text.trim('') === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newComment: Omit<IComment, '_id'> = {
      email,
      name,
      text,
      eventId,
    };

    try {
      await client.connect();

      const result = await eventsDB
        .collection('comments')
        .insertOne(newComment);

      res.status(201).json({
        message: 'Comment created!',
        comment: { ...newComment, _id: result.insertedId.toString() },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    } finally {
      await client.close();
    }

    return;
  }

  if (req.method === 'GET') {
    try {
      await client.connect();

      const comments = await eventsDB
        .collection<IComment>('comments')
        .find({ eventId })
        .sort({ _id: -1 })
        .toArray();

      res.status(201).json({
        comments,
      });
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
