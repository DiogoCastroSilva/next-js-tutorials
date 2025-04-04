import { useState } from 'react';

import CommentList from '../comment-list/comment-list';
import NewComment from '../new-comment/new-comment';
import styles from './comments.module.css';

import type { IComments } from './contracts';
import type { INewCommentValues } from '../new-comment/contracts';

export default function Comments({ eventId }: IComments) {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: INewCommentValues) {
    // send data to API
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}
