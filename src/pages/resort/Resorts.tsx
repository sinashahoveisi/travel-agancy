import map from 'lodash/map';
import {useState, useMemo} from 'react';
import {filterResorts, sortResorts} from '@/utils/resortUtil';
import ResortCard from '@/components/card/ResortCard';
import type {FilterResortsProps, ResortProps, SortTypeResortsProps} from '@/types/resort';
import FilterResort from '@/containers/resorts/FilterResort';
import SortResort from '@/containers/resorts/SortResort';

const Resorts = () => {
  const [filters, setFilters] = useState<FilterResortsProps | undefined>(undefined);
  const [sortType, setSortType] = useState<SortTypeResortsProps>('title');

  const filteredResorts = useMemo(() => filterResorts(filters), [filters]);
  const sortedFilteredResorts = useMemo(() => sortResorts(filteredResorts, sortType), [filteredResorts, sortType]);

  return (
    <main>
      <div className="hero my-10 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Resorts Section</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <FilterResort onFilter={setFilters} />
      <SortResort onChange={setSortType} />
      <section className="xxl:grid-cols-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {map(sortedFilteredResorts, (resort: ResortProps) => (
          <ResortCard
            key={resort?.id}
            title={resort?.title}
            description={resort?.description}
            price={resort?.price}
            imageUrl={resort?.imageUrl}
          />
        ))}
      </section>
    </main>
  );
};

export default Resorts;
