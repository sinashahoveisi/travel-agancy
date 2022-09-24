import type {FC} from 'react';

interface Props {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
}

const ResortCard: FC<Props> = ({title, description, imageUrl, price}) => {
  return (
    <article className="card glass w-full">
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-4">{description}</p>
        <div className="card-actions mt-2 items-center justify-between">
          <div className="badge badge-outline">{price}</div>
          <button type="button" className="btn btn-primary">
            Add to Bucket
          </button>
        </div>
      </div>
    </article>
  );
};

export default ResortCard;
