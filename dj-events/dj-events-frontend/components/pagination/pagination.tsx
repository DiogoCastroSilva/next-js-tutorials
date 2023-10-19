import Link from 'next/link';
import { IPagination } from '@/components/pagination/contracts';
import { PER_PAGE } from '@/config';

export default function Pagination({ page, count }: IPagination) {
  const lastPage = Math.ceil(count / PER_PAGE);

  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`} className="btn-secondary">
          Prev
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`} className="btn-secondary">
          Next
        </Link>
      )}
    </>
  );
}
