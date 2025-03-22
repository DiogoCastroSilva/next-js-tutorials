import NewsCard from '@/app/components/news-card/news-card';
import { INewsList } from '@/app/contracts/news';

export default function NewsList({ news }: { news: INewsList }) {
  return (
    <ul className="news-list">
      {news?.map((article) => (
        <NewsCard key={article.id} {...article} />
      ))}
    </ul>
  );
}
