import {useState, useMemo} from 'react';
import {useAtom} from 'jotai';
import isUndefined from 'lodash/isUndefined';
import map from 'lodash/map';
import some from 'lodash/some';
import get from 'lodash/get';
import {filterResorts, sortResorts} from '@/utils/resortUtil';
import ResortCard from '@/components/card/ResortCard';
import type {FilterResortsProps, ResortProps, SortTypeResortsType} from '@/types/resort';
import FilterResort from '@/containers/resorts/FilterResort';
import SortResort from '@/containers/resorts/SortResort';
import bucketAtom from '@/atoms/bucketAtom';
import PaginateResort from '@/containers/resorts/PaginateResort';

const Resorts = () => {
  const [bucket, setBucket] = useAtom(bucketAtom);
  const [filters, setFilters] = useState<FilterResortsProps | undefined>(undefined);
  const [sortType, setSortType] = useState<SortTypeResortsType>('title');
  const [page, setPage] = useState<number>(1);

  const filteredResorts = useMemo(() => filterResorts(filters), [filters]);
  const sortedFilteredResorts = useMemo(() => sortResorts(filteredResorts, sortType), [filteredResorts, sortType]);

  const addToBucket = (resort: ResortProps) => setBucket({type: 'ADD_RESORT', resort});
  const removeFromBucket = (id: number) => setBucket({type: 'DELETE_RESORT', id});

  return (
    <main>
      <div className="hero my-10 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Resorts Section</h1>
            <p className="py-6">
              All resorts are displayed in this section. By clicking on the resort filter, you can filter the resorts
              based on the title and the minimum and maximum price, and by clicking on sort, you can sort the resorts
              based on the title and price. There is also a pagination section at the bottom of the page.
            </p>
          </div>
        </div>
      </div>
      <FilterResort onFilter={setFilters} allowRemoveFilter={!isUndefined(filters)} />
      <SortResort onChange={setSortType} />
      <section className="xxl:grid-cols-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {map(get(sortedFilteredResorts, page - 1), (resort: ResortProps) => (
          <ResortCard
            key={resort?.id}
            resort={resort}
            isInBucket={some(bucket, ['id', resort?.id])}
            addToBucket={addToBucket}
            removeFromBucket={removeFromBucket}
          />
        ))}
        <PaginateResort currentPage={page} lastPage={sortedFilteredResorts?.length} onChangePage={setPage} />
      </section>
    </main>
  );
};

export default Resorts;
