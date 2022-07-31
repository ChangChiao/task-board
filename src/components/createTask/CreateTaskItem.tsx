import { BiTrash } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { getDaysFrom } from '../../utils';
import { pickStaff } from '../../utils/http';
import Avatar from '../atoms/Avatar';

type ListItemProp = Task.TaskDetail & {
  applicant: Task.Applicant[] | [];
};

const CreateTaskItem = ({
  id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  status,
  applicant,
  expire,
}: ListItemProp) => {
  const handleClick = async (userId: string) => {
    await pickStaff({ taskId: id, userId });
  };
  return (
    <div className="relative rounded-lg flex text-white shadow-lg min-h-[160px] p-4 bg-slate-800">
      <button className="absolute text-3xl top-5 right-10">
        <BiTrash />
      </button>
      <span className="absolute right-10 bottom-5">{getDaysFrom(expire)}</span>
      <div className="w-32">
        <img src={cover} alt="" />
      </div>
      <div className="w-3/4 pl-4 info">
        <div className="flex"></div>
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="flex items-center text-secondary">
          <MdOutlineAttachMoney />
          {reward}
        </span>
        <p className="py-2">{description}</p>
        <div className="flex">
          <div className="flex items-center pr-2">
            <BsPeopleFill className="mr-1" />
            申請人數 {applicant?.length}
          </div>
          <button className="w-32 btn">查看所有申請人</button>
        </div>
        {status === 0 && (
          <ul>
            {applicant.map((item) => (
              // eslint-disable-next-line no-underscore-dangle
              <li key={item.id}>
                <Avatar image={item.avatar} /> <span>{item.author}</span>{' '}
                <button onClick={() => handleClick(item.id)}>選擇這個人</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateTaskItem;
