import {useAtom} from 'jotai';
import map from 'lodash/map';
import {ResortProps} from '@/types/resort';
import ResortCard from '@/components/card/ResortCard';
import bucketAtom from '@/atoms/bucketAtom';

const Buckets = () => {
  const [bucket, setBucket] = useAtom(bucketAtom);

  const addToBucket = (resort: ResortProps) => setBucket({type: 'ADD_RESORT', resort});
  const removeFromBucket = (id: number) => setBucket({type: 'DELETE_RESORT', id});

  return (
    <main>
      <div className="hero my-10 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bucket Section</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <section className="xxl:grid-cols-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {map(bucket, (resort: ResortProps) => (
          <ResortCard
            key={resort?.id}
            resort={resort}
            isInBucket
            addToBucket={addToBucket}
            removeFromBucket={removeFromBucket}
          />
        ))}
      </section>
    </main>
  );
};

export default Buckets;
