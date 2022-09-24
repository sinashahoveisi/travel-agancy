import {FC, memo, MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import type {ResortProps} from '@/types/resort';

interface Props {
  resort: ResortProps;
  isInBucket?: boolean;
  addToBucket(resort: ResortProps): void;
  removeFromBucket(id: number): void;
}

const ResortCard: FC<Props> = ({resort, isInBucket, addToBucket, removeFromBucket}) => {
  const onRemoveFromBucket = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFromBucket(resort?.id);
  };

  const onAddToBucket = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addToBucket(resort);
  };

  return (
    <Link to={`/resorts/${resort?.id}/${resort?.title}`}>
      <article className="card glass h-full w-full">
        {resort?.imageUrl && (
          <figure>
            <img className="w-full" src={resort?.imageUrl} alt={resort?.title} />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{resort?.title}</h2>
          <p className="line-clamp-4">{resort?.description}</p>
          <div className="card-actions mt-2 items-center justify-between">
            <div className="badge badge-outline">{resort?.price}</div>
            {isInBucket ? (
              <button type="button" className="text btn btn-error btn-xs" onClick={onRemoveFromBucket}>
                Remove From Bucket
              </button>
            ) : (
              <button type="button" className="btn btn-primary btn-xs" onClick={onAddToBucket}>
                Add to Bucket
              </button>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default memo(ResortCard);
