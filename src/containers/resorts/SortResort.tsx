import type {ChangeEvent, FC} from 'react';
import type {SortTypeResortsProps} from '@/types/resort';

interface Props {
  onChange(type: SortTypeResortsProps): void;
}

const SortResort: FC<Props> = ({onChange}) => {
  return (
    <section className="my-3 flex flex-row items-center justify-start">
      <h4 className="mr-2 text-sm">SortBy:(click for change)</h4>
      <label htmlFor="sort" className="swap text-lg">
        <input
          id="sort"
          type="checkbox"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.checked ? 'price' : 'title');
          }}
        />
        <div className="swap-on">Price</div>
        <div className="swap-off">Title</div>
      </label>
    </section>
  );
};

export default SortResort;
