// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getEventById } from '@/mocks/dummy-data';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { IEvent } from '@/contracts/event';

type IMessage = { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IEvent | IMessage>
) {
  const { id } = req.query;

  if (!id) {
    res.status(404).json({ message: 'Invalid event id' });
    return;
  }

  const event = getEventById(id as string);

  if (!event) {
    res.status(404).json({ message: 'Event not found' });
    return;
  }

  res.status(200).json(event);
}
