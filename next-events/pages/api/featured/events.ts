// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFeaturedEvents } from '@/mocks/dummy-data';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { TEvents } from '@/contracts/event';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TEvents>
) {
  const events = getFeaturedEvents();

  res.status(200).json(events);
}
