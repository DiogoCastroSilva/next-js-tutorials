'use server';
import { redirect } from 'next/navigation';

import { storePost } from "@/lib/posts";

export async function createPost(_prevState: unknown, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const image = formData.get('image') as File;

  const errors = [];

  if (!title || title.trim() === '') {
    errors.push('Title is required');
  }

  if (!content || content.trim() === '') {
    errors.push('Content is required');
  }

  if (!image || image.size === 0) {
    errors.push('Image is required');
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: '',
    title,
    content,
    userId: 1,
  });

  redirect('/feed');
}
