import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '@/contracts/post';

const postsDir = path.join(process.cwd(), 'content/posts');

function getPostsData(postIdentifier: string) {
  const postId = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDir, `${postId}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    id: postId,
    ...(data as Omit<IPost, 'id'>),
    content,
  };
}

function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir, 'utf-8');

  const allPosts = postFiles.map((file) => getPostsData(file));

  const sortedPosts = allPosts.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return sortedPosts;
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

export { getAllPosts, getFeaturedPosts, getPostsData };
