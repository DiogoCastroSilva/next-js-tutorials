'use client';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error creating a new Post',
  description: 'Creating a new post for our community was not possible!',
};

export default function NewPostError({ error }: { error: Error }) {
  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{error.message}</p>
    </>
  );
}
