interface IPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

type TPosts = IPost[];

export type { IPost, TPosts };
