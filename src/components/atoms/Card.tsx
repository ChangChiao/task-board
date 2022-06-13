import { useRouter } from 'next/router';

type CardProps = {
  title: string;
  description: string;
  cover: string;
  author: string;
  imageAlt: string;
  reward: number;
  startTime?: Date;
  endTime?: Date;
};

const Card = (props: CardProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <img src={`${router.basePath}${props.cover}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { Card };
