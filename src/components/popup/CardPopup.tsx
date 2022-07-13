import { useRouter } from 'next/router';

import { usePopupContext } from '../../hooks/usePopupContext';
import { getDaysFrom } from '../../utils';
import { applyTask } from '../../utils/http';
import Avatar from '../atoms/Avatar';

type CardProps = {
  title: string;
  description: string;
  cover?: string;
  author: string;
  avatar?: string;
  reward: number;
  status: number;
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
  const { setPopup } = usePopupContext();
  const handleClick = () => {
    applyTask();
  };
  const closeCardDetail = () => {
    setPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out">
      <div className="mask" onClick={closeCardDetail}></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 p-4 bg-blue-500 shadow-3xl w-96 rounded-xl">
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
            <button onClick={handleClick} className="btn">
              我要接任務
            </button>
            <button className="btn" onClick={closeCardDetail}>
              取消
            </button>
          </div>
        </div>
        <style jsx>
          {`
            .card-mask {
              @apply absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl tracking-wider text-white translate-x-2 bg-black/50;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Card;
