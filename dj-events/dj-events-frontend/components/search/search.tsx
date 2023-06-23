import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Search.module.css';

const Search = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };

  const handleOnChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setTerm(value);
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleOnSubmit}>
        <input type="text" value={term} onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default Search;
