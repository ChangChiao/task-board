import { useRouter } from 'next/router';

import { getDaysFrom } from '../../utils';
import Avatar from './Avatar';

type CardProps = {
  title: string;
  description: string;
  cover?: string;
  author: string;
  avatar?: string;
  reward: number;
  startTime?: Date;
};

const Card = ({
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  author,
  avatar = '/assets/images/image-avatar.png',
  reward,
  startTime = new Date(),
}: CardProps) => {
  const router = useRouter();

  return (
    <div className="p-4 bg-blue-500 shadow-3xl w-80 rounded-xl">
      <div className="w-full">
        <img src={`${router.basePath}${cover}`} alt="cover" />
      </div>
      <div className="">
        <h3 className="pt-2 text-xl font-semibold text-white">{title}</h3>
        <div className="leading-9 text-gray-400">{description}</div>
        <div className="font-bold text-secondary">
          {reward}{' '}
          <span className="tetx-primary">{getDaysFrom(startTime)}</span>
        </div>
        <div className="flex items-center">
          <Avatar image={avatar} />
          <span className="pl-2 text-gray-400"> {author}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
