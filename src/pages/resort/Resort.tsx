import {Navigate, useParams} from 'react-router-dom';
import {useMemo} from 'react';
import {useAtom} from 'jotai';
import some from 'lodash/some';
import {ResortProps} from '@/types/resort';
import {getResort} from '@/utils/resortUtil';
import bucketAtom from '@/atoms/bucketAtom';

const Resort = () => {
  const [bucket, setBucket] = useAtom(bucketAtom);
  const {id} = useParams<{id: string; title?: string}>();
  const resort: ResortProps | undefined = useMemo(() => (id ? getResort(id) : undefined), [id]);

  const onAddToBucket = () => setBucket({type: 'ADD_RESORT', resort});
  const onRemoveFromBucket = () => setBucket({type: 'DELETE_RESORT', id: resort?.id});

  if (!resort) return <Navigate replace to="/resorts" />;

  return (
    <main>
      <div className="hero my-10 rounded-md bg-base-200 py-10 px-5">
        <div className="hero-content w-full text-left">
          <div className="max-w-xxl">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <h1 className="mb-10 text-5xl font-bold md:mr-10 md:mb-0">{resort?.title}</h1>
              <div className="badge badge-outline badge-success badge-lg ml-auto">{resort?.price}</div>
            </div>
            {resort?.imageUrl && (
              <figure>
                <img className="my-3 w-full rounded-lg" src={resort?.imageUrl} alt={resort?.title} />
              </figure>
            )}
            <p className="py-6 text-left">{resort?.description}</p>
            <div className="flex items-center justify-end">
              {some(bucket, ['id', resort?.id]) ? (
                <button type="button" className="text btn btn-error" onClick={onRemoveFromBucket}>
                  Remove From Bucket
                </button>
              ) : (
                <button type="button" className="btn btn-primary" onClick={onAddToBucket}>
                  Add to Bucket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resort;
