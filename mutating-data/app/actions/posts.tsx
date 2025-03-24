'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { storePost, updatePostLikeStatus } from '@/lib/posts';
import cloudinary from '@/lib/cloudinary';

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

  let imageUrl;

  try {
    imageUrl = await cloudinary.uploadImage(image);
  } catch {
    throw new Error('Failed to upload image');
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath('/', 'layout');
  redirect('/feed');
}

export async function tooglePostLikeStatus(postId: number) {
  await updatePostLikeStatus(postId, 2);

  revalidatePath('/', 'layout');
}
