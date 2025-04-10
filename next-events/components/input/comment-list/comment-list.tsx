import { IComment } from '@/contracts/comment';
import styles from './comment-list.module.css';

export default function CommentList({ data }: { data: IComment[] }) {
  return (
    <ul className={styles.comments}>
      {data.map(({ id, text, name }) => (
        <li key={id}>
          <p>{text}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
