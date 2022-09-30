import { FaMapMarkerAlt } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';

import { usePopupContext } from '../../hooks/usePopupContext';
import { formateTime } from '../../utils';
import Avatar from './Avatar';

type CardProps = Task.TaskDetail & {
  setDetail: (value: Task.TaskDetail) => void;
};

const Card = ({
  _id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  author,
  reward,
  status,
  city,
  expire,
  setDetail,
}: CardProps) => {
  const { setPopup } = usePopupContext();
  const handleClick = () => {
    setPopup('card');
    setDetail({
      _id,
      title,
      description,
      cover,
      author,
      reward,
      status,
      expire,
      city,
    });
  };

  const handleInView = (inView: boolean) => {
    // console.log('Inview---:', inView);
    if (!inView) return;
    // TODO use card Id
    const ele = document.getElementById(_id) as HTMLImageElement;
    const { src } = ele.dataset;
    ele.src = src!;
  };

  return (
    // <div
    //   onClick={handleClick}
    //   className="relative p-4 mb-10 bg-blue-500 shadow-3xl w-80 rounded-xl"
    // >
    <InView
      as="div"
      triggerOnce={true}
      onClick={handleClick}
      className="relative p-4 mr-auto bg-blue-500 shadow-3xl w-80 min-h-[400px] rounded-xl"
      onChange={handleInView}
    >
      {status === 1 && <div className="card-mask">已結束</div>}
      {status === 2 && <div className="card-mask">已過期</div>}
      <div className="w-full">
        <img
          id={_id}
          className="h-[200px] mx-auto"
          data-src={cover}
          alt="cover"
        />
      </div>
      <div className="">
        <h3 className="pt-2 text-xl font-semibold text-white">{title}</h3>
        {/* <div className="leading-9 text-gray-400">{description}</div> */}
        <div className="flex justify-between h-24 pt-2 text-sm font-bold text-secondary">
          <span> $ {reward} </span>
          <span className="text-cyan-600">{formateTime(expire)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar image={author?.avatar} />
            <span className="pl-2 font-bold text-gray-200">{author?.name}</span>
          </div>
          <span className="flex items-center text-white">
            <FaMapMarkerAlt />
            {city}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .card-mask {
            @apply absolute top-0 left-0 flex items-center justify-center w-full h-full text-xl tracking-wider text-white translate-x-2 bg-black/50;
          }
        `}
      </style>
    </InView>
    // </div>
  );
};

export default Card;
