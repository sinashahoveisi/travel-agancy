import {Navigate, useParams} from 'react-router-dom';
import {useMemo} from 'react';
import {ResortProps} from '@/types/resort';
import {getResort} from '@/utils/resortUtil';

const Resort = () => {
  const {id} = useParams<{id: string; title?: string}>();
  const resort: ResortProps | undefined = useMemo(() => (id ? getResort(id) : undefined), [id]);

  if (!resort) return <Navigate replace to="/resorts" />;

  return (
    <main>
      <div className="hero my-10 rounded-md bg-base-200 py-10 px-5">
        <div className="hero-content w-full text-left">
          <div className="max-w-xxl">
            <div className="flex flex-row items-center justify-between">
              <h1 className="mr-10 text-5xl font-bold">{resort?.title}</h1>
              <div className="badge badge-outline badge-success badge-lg">{resort?.price}</div>
            </div>
            {resort?.imageUrl && (
              <figure>
                <img className="my-3 w-full rounded-lg" src={resort?.imageUrl} alt={resort?.title} />
              </figure>
            )}
            <p className="py-6 text-left">{resort?.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resort;
