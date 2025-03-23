type TPost = {
  id: number;
  image: string;
  title: string;
  userFirstName: string;
  createdAt: string;
  content: string;
};

interface IPost {
  post: TPost;
}

interface IPosts {
  posts: TPost[];
}

export type { TPost, IPost, IPosts };
