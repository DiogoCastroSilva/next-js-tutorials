// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type IMessage = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMessage>
) {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email || !(typeof email === 'string' && email.includes('@'))) {
      res.status(422).json({ message: 'Invalid email address' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
    return;
  }

  res.status(404).json({ message: 'Route not found' });
}
