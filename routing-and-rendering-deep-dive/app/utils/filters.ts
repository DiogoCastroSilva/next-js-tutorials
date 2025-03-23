import { ARCHIVE } from '@/app/configs/routes';
import { convertDate, getDateNow } from '@/app/utils/date';

const trasnformYearsToFilters = (years: number[]) => {
  const today = getDateNow();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  return years.map((year) => {
    const yearFilter = `${year}-${convertDate(currentMonth)}-${convertDate(
      currentDay
    )}`;

    return {
      label: year,
      link: `${ARCHIVE}/${yearFilter}`,
      filter: yearFilter,
    };
  });
};

export { trasnformYearsToFilters };
