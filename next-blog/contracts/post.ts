interface IPost {
  id: string;
  title: string;
  image: string;
  date: string;
  excerpt?: string;
  content?: string;
  isFeatured?: boolean;
}

type TPosts = IPost[];

export type { IPost, TPosts };
