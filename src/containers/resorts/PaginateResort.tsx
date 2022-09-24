import {FC, memo} from 'react';
import map from 'lodash/map';
import max from 'lodash/max';
import min from 'lodash/min';
import range from 'lodash/range';

type Props = {
  currentPage: number;
  lastPage: number;
  onChangePage(page: number): void;
};

const PaginateResort: FC<Props> = ({currentPage = 1, lastPage, onChangePage}) => {
  if (lastPage === 1) return null;

  return (
    <div className="col-span-full my-12 flex flex-col items-center">
      <div className="flex text-gray-700">
        {currentPage !== 1 && (
          <button
            type="button"
            className="mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200"
            onClick={() => onChangePage((currentPage || 1) - 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
            </svg>
          </button>
        )}
        <div className="flex h-8 rounded-full bg-gray-200 font-medium">
          {currentPage > 3 && (
            <button
              type="button"
              className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in"
              onClick={() => onChangePage(1)}>
              1
            </button>
          )}
          {(currentPage || 1) > 4 && (
            <div className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in">
              ...
            </div>
          )}
          {currentPage > 1 &&
            map(range(max([(currentPage || 4) - 2, 1]) || 1, currentPage || 1, 1), (page: number) => (
              <button
                key={page}
                type="button"
                className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in"
                onClick={() => onChangePage(page)}>
                {page}
              </button>
            ))}
          <div className="flex w-8 cursor-pointer items-center justify-center  rounded-full bg-pink-600 leading-5 text-white transition  duration-150 ease-in">
            {currentPage || '1'}
          </div>
          {map(range((currentPage || 1) + 1, min([(currentPage || 1) + 3, (lastPage || 1) + 1]), 1), (page: number) => (
            <button
              key={page}
              type="button"
              className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in"
              onClick={() => onChangePage(page)}>
              {page}
            </button>
          ))}
          {(currentPage || 1) + 3 < lastPage && (
            <div className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in">
              ...
            </div>
          )}
          {(currentPage || 1) < (lastPage || 1) - 2 && (
            <button
              type="button"
              className="flex w-8 cursor-pointer items-center justify-center  rounded-full leading-5 transition duration-150 ease-in"
              onClick={() => onChangePage(lastPage)}>
              {lastPage}
            </button>
          )}
        </div>
        {currentPage !== lastPage && (
          <button
            type="button"
            className="ml-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200"
            onClick={() => onChangePage((currentPage || 1) + 1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(PaginateResort);
