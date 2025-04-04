// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllEvents } from '@/mocks/dummy-data';

import type { NextApiRequest, NextApiResponse } from 'next';
import type { TEvents } from '@/contracts/event';

type IMessage = { message: string};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TEvents | IMessage>
) {
  const query = req.query;
  const { year, month } = query;

  if (year && month) {
    const numYear = +year;
    const numMonth = +month;

    if (
      isNaN(numYear) ||
      isNaN(numMonth) ||
      numMonth < 1 ||
      numMonth > 12 ||
      numYear < 2021 ||
      numYear > 2030
    ) {
      res.status(404).json({ message: 'Invalid filter' });
      return;
    }

    const filteredEvents = getAllEvents().filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === numYear &&
        eventDate.getMonth() === numMonth - 1
      );
    });

    res.status(200).json(filteredEvents);
  }

  const events = getAllEvents();

  res.status(200).json(events);
}
