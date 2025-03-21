interface INews {
  id: number;
  title: string;
  authors: string[];
  image_url: string;
  news_site: string;
  summary: string;
  publish_at: string;
  update_at: string;
}

type INewsList = INews[];

export type { INews, INewsList };
