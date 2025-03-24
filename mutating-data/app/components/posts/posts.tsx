'use client';
import { useOptimistic } from 'react';

import { formatDate } from '@/lib/format';
import { tooglePostLikeStatus } from '@/app/actions/posts';
import Image from 'next/image';

import LikeButton from '../like-icon';

import type { IPost, IPosts } from './contracts';

function Post({ post, action }: IPost) {
  return (
    <article className="post">
      <div className="post-image">
        <Image src={post.image} alt={post.title} width={80} height={80} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? 'liked' : ''}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }: IPosts) {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(
    posts,
    (prevPosts, updatedPostId: number) => {
      const updatedPostIndex = prevPosts.findIndex(
        (post) => post.id === updatedPostId
      );

      if (updatedPostIndex === -1) {
        return prevPosts;
      }

      const updatedPost = { ...prevPosts[updatedPostIndex] };
      updatedPost.likes += updatedPost.isLiked ? -1 : 1;
      updatedPost.isLiked = !updatedPost.isLiked;

      return [
        ...prevPosts.slice(0, updatedPostIndex),
        updatedPost,
        ...prevPosts.slice(updatedPostIndex + 1),
      ];
    }
  );

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function handleLike(postId: number) {
    updateOptimisticPosts(postId);
    await tooglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={handleLike} />
        </li>
      ))}
    </ul>
  );
}
