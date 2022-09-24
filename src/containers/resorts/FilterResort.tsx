import type {FC} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import clsx from 'clsx';
import {yupResolver} from '@hookform/resolvers/yup';
import TextInput from '@/components/input/TextInput';
import type {FilterResortsProps} from '@/types/resort';

interface Props {
  onFilter(filterParams?: FilterResortsProps): void;
  allowRemoveFilter?: boolean;
}

const validationSchema = yup.object().shape({
  title: yup.string().trim().nullable(),
  minPrice: yup.number().nullable(),
  maxPrice: yup.number().nullable()
});

const FilterResort: FC<Props> = ({onFilter, allowRemoveFilter}) => {
  const {control, handleSubmit} = useForm<FilterResortsProps>({
    resolver: yupResolver(validationSchema)
  });

  return (
    <section>
      <div className="collapse-arrow collapse rounded-box border border-base-300 bg-base-100">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">Filter Resorts</div>
        <div className="collapse-content">
          <form name="filterForm" onSubmit={handleSubmit(onFilter)}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <TextInput control={control} name="title" placeholder="like India" label="Title" />
              <TextInput control={control} name="minPrice" placeholder="just number" label="Min Price" type="number" />
              <TextInput control={control} name="maxPrice" placeholder="just number" label="Max Price" type="number" />
            </div>
            <div
              className={clsx('mt-10 flex items-center', {
                'justify-between': allowRemoveFilter,
                'justify-end': !allowRemoveFilter
              })}>
              {allowRemoveFilter && (
                <button type="button" className="btn-danger btn" onClick={() => onFilter()}>
                  Remove Filter
                </button>
              )}
              <button type="submit" className="btn btn-info">
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
