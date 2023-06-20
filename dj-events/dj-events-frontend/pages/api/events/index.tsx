import { NextApiRequest, NextApiResponse } from 'next';
import { SingleEvent } from '@/models/events';
import { SingleError } from '@/models/error';

import events from './data.json';

export default (
  { method }: NextApiRequest,
  res: NextApiResponse<SingleEvent[] | SingleError>
) => {
  if (method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${method} not allowed` });
  }
};
