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
  contactInfo,
  expire,
}: Task.TaskWithContact) => {
  return (
    <div className="relative rounded-lg flex text-white shadow-lg min-h-[160px] p-4 bg-slate-800">
      {status === 1 && !contactInfo && <div className="card-mask">已結束</div>}
      {status === 2 && <div className="card-mask">已過期</div>}
      <span className="absolute right-10 top-5">{formateTime(expire)}</span>
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
        <div className="flex items-center">
          <Avatar image={author?.avatar} />{' '}
          <span className="pr-6"> {author?.name} </span>
          <div>聯絡方式：{contactInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedTaskItem;
