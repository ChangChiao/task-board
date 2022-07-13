import { useRouter } from 'next/router';

import { usePopupContext } from '../../hooks/usePopupContext';
import { getDaysFrom } from '../../utils';
import Avatar from './Avatar';

type CardProps = Card.CardDetail & {
  setDetail: (value: Card.CardDetail) => void;
};

const Card = ({
  id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  author,
  avatar,
  reward,
  status,
  expire = new Date(),
  setDetail,
}: CardProps) => {
  const router = useRouter();
  const { setPopup } = usePopupContext();
  const handleClick = () => {
    setPopup(true);
    setDetail({
      id,
      title,
      description,
      cover,
      author,
      avatar,
      reward,
      status,
      expire,
    });
  };
  return (
    <div
      onClick={handleClick}
      className="relative p-4 bg-blue-500 shadow-3xl w-80 rounded-xl"
    >
      {status === 1 && <div className="card-mask">已結束</div>}
      {status === 2 && <div className="card-mask">已過期</div>}
      <div className="w-full">
        <img src={`${router.basePath}${cover}`} alt="cover" />
      </div>
      <div className="">
        <h3 className="pt-2 text-xl font-semibold text-white">{title}</h3>
        {/* <div className="leading-9 text-gray-400">{description}</div> */}
        <div className="font-bold text-secondary">
          {reward} <span className="tetx-primary">{getDaysFrom(expire)}</span>
        </div>
        <div className="flex items-center">
          <Avatar image={avatar} />
          <span className="pl-2 text-gray-400"> {author}</span>
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
  );
};

export default Card;
