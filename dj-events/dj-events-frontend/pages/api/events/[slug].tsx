import { NextApiRequest, NextApiResponse } from 'next';
import { SingleEvent } from '@/models/events';
import { SingleError } from '@/models/error';

import events from './data.json';

export default (
  { method, query: { slug } }: NextApiRequest,
  res: NextApiResponse<SingleEvent | SingleError>
) => {
  if (method === 'GET') {
    const singleEvent = events.filter((ev) => ev.slug === slug)?.[0];

    res.status(200).json(singleEvent);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${method} not allowed` });
  }
};
