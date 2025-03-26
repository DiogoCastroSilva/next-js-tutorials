import { Metadata } from 'next';

import PostForm from '@/app/components/post-form';

export const metadata: Metadata = {
  title: 'Create a new Post',
  description: 'Create a new post for our community!',
};

export default function NewPostPage() {
  return (
    <>
      <h1>Create a new post</h1>
      <PostForm />
    </>
  );
}
