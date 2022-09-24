import type {FC} from 'react';
import type {FilterResortsProps} from '@/types/resort';

interface Props {
  onFilter(filterParams: FilterResortsProps): void;
}

const FilterResort: FC<Props> = ({onFilter}) => {
  return (
    <section>
      <div className="collapse collapse-arrow rounded-box border border-base-300 bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Filter Resorts</div>
        <div className="collapse-content">
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="like India" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Min Price</span>
                </label>
                <input type="number" placeholder="just number" className="input input-bordered w-full max-w-xs" />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Max Price</span>
                </label>
                <input type="number" placeholder="just number" className="input input-bordered w-full max-w-xs" />
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end">
              <button type="button" className="btn btn-primary">
                Apply Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FilterResort;
