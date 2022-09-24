import filter from 'lodash/filter';
import includes from 'lodash/includes';
import orderBy from 'lodash/orderBy';
import resortsData from '@/assets/constants/data.json';
import type {FilterResortsProps, ResortProps, SortTypeResortsProps} from '@/types/resort';

export const getResorts = (): ResortProps[] => {
  return resortsData;
};

export const filterResorts = (filterParams?: FilterResortsProps) => {
  if (!filterParams) return resortsData;
  return filter(
    resortsData,
    (resort: ResortProps) =>
      (filterParams?.title && includes(resort?.title, filterParams?.title)) ||
      (filterParams?.minPrice && +resort?.price >= filterParams?.minPrice) ||
      (filterParams?.maxPrice && +resort?.price <= filterParams?.maxPrice)
  );
};

export const sortResorts = (filteredResorts: ResortProps[], type: SortTypeResortsProps) =>
  orderBy(filteredResorts, [type], ['asc']);
