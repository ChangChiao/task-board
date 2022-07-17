import { useRouter } from 'next/router';

import { usePopupContext } from '../../hooks/usePopupContext';
import { getDaysFrom } from '../../utils';
import { applyTask } from '../../utils/http';
import Avatar from '../atoms/Avatar';

const CardPopup = ({
  id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  author,
  avatar = '/assets/images/image-avatar.png',
  reward,
  expire = new Date(),
}: Card.CardDetail) => {
  const router = useRouter();
  const { setPopup } = usePopupContext();
  const handleClick = async () => {
    await applyTask(id);
  };
  const closeCardDetail = () => {
    setPopup('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out">
      <div className="mask" onClick={closeCardDetail}></div>
      <div className="absolute h-[700px] top-0 bottom-0 left-0 right-0 m-auto p-4 bg-blue-500 shadow-3xl w-96 rounded-xl">
        <div className="w-full">
          <img src={`${router.basePath}${cover}`} alt="cover" />
        </div>
        <div className="">
          <h3 className="pt-2 text-xl font-semibold text-white">{title}</h3>
          <div className="leading-9 text-gray-400  h-[150px] overflow-y-scroll">
            {description}
          </div>
          <div className="flex justify-between py-2 text-lg font-bold text-secondary">
            <span> $ {reward} </span>
            <span className="tetx-primary">{getDaysFrom(expire)}</span>
          </div>
          <div className="flex items-center">
            <Avatar image={avatar} />
            <span className="pl-2 text-gray-400"> {author}</span>
          </div>
          <div className="flex items-center justify-center pt-4">
            <button onClick={handleClick} className="btn">
              我要接任務
            </button>
            <button className="ml-2 btn" onClick={closeCardDetail}>
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

export default CardPopup;
