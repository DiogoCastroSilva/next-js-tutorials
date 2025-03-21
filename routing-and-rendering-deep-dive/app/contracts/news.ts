interface IAuthor {
  name: string;
}

interface INews {
  id: number;
  title: string;
  authors: IAuthor[];
  image_url: string;
  url: string;
  news_site: string;
  summary: string;
  publish_at: string;
  update_at: string;
}

type INewsList = INews[];

export type { INews, INewsList };
