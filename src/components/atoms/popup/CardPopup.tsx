import { FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { usePopupContext } from '../../../hooks/usePopupContext';
import { formateTime } from '../../../utils';
import { applyTask } from '../../../utils/http';
import Avatar from '../Avatar';

const CardPopup = ({
  _id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  author,
  reward,
  city,
  expire,
}: Task.TaskDetail) => {
  const { setPopup } = usePopupContext();
  const handleClick = async () => {
    if (!_id) return;
    const res = await applyTask(_id);
    if (res.status === 'success') {
      toast(res.message);
    }
  };
  const closeTaskDetail = () => {
    setPopup('');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full transition-all duration-300 ease-in-out">
      <div className="mask" onClick={closeTaskDetail}></div>
      <div className="absolute h-[800px] top-0 bottom-0 left-0 right-0 m-auto p-4 bg-blue-500 shadow-3xl w-96 rounded-xl">
        <img className="w-full" src={cover} alt="cover" />
        <h3 className="py-2 text-xl font-semibold text-white">{title}</h3>
        <div className="">
          <div className="leading-9 text-gray-400  h-[150px] overflow-y-scroll">
            {description}
          </div>
          <div className="flex justify-between py-2 text-sm font-bold text-secondary">
            <span> $ {reward} </span>
            <span className="tetx-primary">{formateTime(expire)}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar image={author.avatar} />
              <span className="pl-2 text-gray-400"> {author?.name}</span>
            </div>
            <span className="flex items-center text-gray-400">
              <FaMapMarkerAlt />
              {city}
            </span>
          </div>
          <div className="flex items-center justify-center pt-4">
            <button className="bg-gray-500 btn" onClick={closeTaskDetail}>
              取消
            </button>
            <button onClick={handleClick} className="ml-2 btn">
              我要接任務
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
