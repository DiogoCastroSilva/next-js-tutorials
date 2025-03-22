import { cache } from 'react';

const getDateNow = cache(() => new Date());

const convertDate = (value: number) => (value > 10 ? value : `0${value}`);

export { getDateNow, convertDate };
