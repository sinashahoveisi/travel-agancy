import filter from 'lodash/filter';
import includes from 'lodash/includes';
import find from 'lodash/find';
import orderBy from 'lodash/orderBy';
import resortsData from '@/assets/constants/data.json';
import type {FilterResortsProps, ResortProps, SortTypeResortsProps} from '@/types/resort';

export const getResort = (id: number | string): ResortProps | undefined => {
  return find(resortsData, ['id', +id]);
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

export const sortResorts = (filteredResorts: any[], type: SortTypeResortsProps) =>
  orderBy(filteredResorts, [type], ['asc']);
