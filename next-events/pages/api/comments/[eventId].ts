// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { IComment } from '@/contracts/comment';

type IMessage = { message: string };
type ICommentResponse = { comment: IComment } & IMessage;
type ICommentsResponse = { comments: IComment[] };

const comments: IComment[] = [
  {
    email: 'email@email.com',
    name: 'Email',
    text: 'This is a comment',
    id: '1',
  },
  {
    email: 'email@email.com',
    name: 'Email',
    text: 'This is a comment',
    id: '2',
  },
  {
    email: 'email@email.com',
    name: 'Email',
    text: 'This is a comment',
    id: '3',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage | ICommentResponse | ICommentsResponse>
) {
  const { eventId } = req.query;

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

    const newComment = {
      email,
      name,
      text,
      id: new Date().toISOString(),
    };

    console.log(newComment);

    comments.push(newComment);

    res.status(201).json({ message: 'Comment created!', comment: newComment });
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({ comments });
    return;
  }

  res.status(404).json({ message: 'Route not found' });
}
