import { TEvents } from '@/contracts/event';

import styles from './event-list.module.css';
import EventItem from '@/components/events/event-item/event-item';

export default function EventsList({ events }: { events: TEvents }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
