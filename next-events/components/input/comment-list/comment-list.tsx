import { IComment } from '@/contracts/comment';
import styles from './comment-list.module.css';

export default function CommentList({ data }: { data: IComment[] }) {
  return (
    <ul className={styles.comments}>
      {data.map(({ _id, text, name }) => (
        <li key={_id}>
          <p>{text}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
