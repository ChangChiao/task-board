import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { formateTime } from '../../utils';
import Avatar from '../atoms/Avatar';

const AcceptedTaskItem = ({
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  author,
  status,
  city,
  expire,
}: Task.TaskWithContact) => {
  return (
    <div className="relative rounded-lg flex text-white shadow-lg min-h-[160px] p-4 bg-slate-800">
      {status === 1 && <div className="card-mask">已結束</div>}
      {status === 2 && <div className="card-mask">已過期</div>}
      <span className="absolute flex items-center text-cyan-500 right-10 bottom-12">
        <FaMapMarkerAlt className="mr-2" />
        {city}
      </span>
      <span className="absolute text-cyan-300 right-10 bottom-5">
        {formateTime(expire)}
      </span>
      <div className="w-32">
        <img src={cover} alt="" />
      </div>
      <div className="w-3/4 pl-4 info">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="flex items-center text-secondary">
          <MdOutlineAttachMoney />
          {reward}
        </span>
        <p className="py-2">{description}</p>
        {author[0] && (
          <div className="flex items-center">
            <Avatar image={author[0]?.avatar} />
            <span className="px-2"> {author[0]?.name} </span>
            <div>聯絡方式：{author[0]?.contact}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptedTaskItem;
