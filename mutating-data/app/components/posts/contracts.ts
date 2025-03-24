type TPost = {
  id: number;
  image: string;
  title: string;
  userFirstName: string;
  createdAt: string;
  content: string;
  isLiked: boolean;
  likes: number;
};

interface IPost {
  post: TPost;
  action: (postId: number) => Promise<void>;
}

interface IPosts {
  posts: TPost[];
}

export type { TPost, IPost, IPosts };
