import { useCallback, useEffect, useState } from 'react';

import { API_ENDPOINT } from '@/config';

import CommentList from '../comment-list/comment-list';
import NewComment from '../new-comment/new-comment';
import styles from './comments.module.css';

import type { IComments } from './contracts';
import type { INewCommentValues } from '../new-comment/contracts';
import { IComment } from '@/contracts/comment';

export default function Comments({ eventId }: IComments) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/comments/${eventId}`);
      const data = await response.json();

      if (data?.comments) {
        setComments(data.comments);
      }
    } catch (error) {
      console.error(error);
    }
  }, [eventId]);

  useEffect(() => {
    if (showComments) {
      loadComments();
    }
  }, [showComments, loadComments]);

  async function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData: INewCommentValues) {
    try {
      const response = await fetch(`${API_ENDPOINT}/api/comments/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList data={comments} />}
    </section>
  );
}
