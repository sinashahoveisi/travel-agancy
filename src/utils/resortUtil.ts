import filter from 'lodash/filter';
import includes from 'lodash/includes';
import find from 'lodash/find';
import reverse from 'lodash/reverse';
import orderBy from 'lodash/orderBy';
import resortsData from '@/assets/constants/data.json';
import type {FilterResortsProps, ResortProps, SortTypeResortsType} from '@/types/resort';
import {sliceIntoChunks, toNumberMoney} from '@/utils/commonUtil';

export const getResort = (id: number | string): ResortProps | undefined => {
  return find(resortsData, ['id', +id]);
};

export const filterResorts = (filterParams?: FilterResortsProps) => {
  if (!filterParams) return resortsData;
  return filter(
    resortsData,
    (resort: ResortProps) =>
      (filterParams?.title && includes(resort?.title, filterParams?.title)) ||
      (toNumberMoney(resort?.price) >= (filterParams?.minPrice || 0) &&
        toNumberMoney(resort?.price) <= (filterParams?.maxPrice || Infinity))
  );
};

export const sortResorts = (filteredResorts: ResortProps[], type: SortTypeResortsType) => {
  const sortBy = ['title', (resort: ResortProps) => toNumberMoney(resort?.price)];
  return sliceIntoChunks(orderBy(filteredResorts, type === 'title' ? sortBy : reverse(sortBy), ['asc']), 20);
};
