import { BiTrash } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { usePopupContext } from '../../hooks/usePopupContext';
import { getDaysFrom } from '../../utils';

const CreateTaskItem = ({
  id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  status,
  applicant,
  expire,
}: Task.TaskWithApplicant) => {
  const { setPopup } = usePopupContext();
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
          <button onClick={() => setPopup('applicant')} className="w-32 btn">
            查看所有申請人
          </button>
          {id} {status}
          {/* TODO 帶入taskId */}
        </div>
      </div>
    </div>
  );
};

export default CreateTaskItem;
