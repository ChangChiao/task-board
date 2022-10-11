import { useMemo } from 'react';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { usePopupContext } from '../../../hooks/usePopupContext';
import { userState } from '../../../store/user';
import { formateTime } from '../../../utils';
import { applyTask } from '../../../utils/http';
import { removeFavorite, addFavorite } from '../../../utils/http/collect';
import { getUser } from '../../../utils/http/user';
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
  const [user, setUser] = useRecoilState(userState);
  const { setPopup } = usePopupContext();
  const closeTaskDetail = () => {
    setPopup('');
  };
  const handleClick = async () => {
    if (!_id) return;
    const res = await applyTask(_id);
    if (res.status === 'success') {
      toast(res.message);
      closeTaskDetail();
    }
  };

  const isFavorite = useMemo(() => {
    const idList = user.collect && user.collect.map((item) => item._id);
    console.log('idList', idList);

    return idList && idList.includes(_id);
  }, [user, _id]);

  const handleFavorite = async () => {
    let result = null;
    if (isFavorite) {
      result = await removeFavorite(_id);
    } else {
      result = await addFavorite(_id);
    }
    if (result) {
      const res = await getUser();
      const { status, data } = res;
      if (status === 'success') {
        setUser(data);
      }
      toast(result.message);
    }
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
              <Avatar image={author.avatar} isVip={author.isVip} />
              <span className="pl-2 text-gray-400"> {author?.name}</span>
            </div>
            <span className="flex items-center text-gray-400">
              <FaMapMarkerAlt />
              {city}
            </span>
          </div>
          <div className="flex justify-end text-2xl text-red-500">
            {isFavorite ? (
              <AiFillHeart
                className="cursor-pointer"
                onClick={handleFavorite}
              />
            ) : (
              <AiOutlineHeart
                className="cursor-pointer"
                onClick={handleFavorite}
              />
            )}
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
