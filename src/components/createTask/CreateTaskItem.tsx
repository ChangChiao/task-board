import { BiTrash } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { usePopupContext } from '../../hooks/usePopupContext';
import { formateTime } from '../../utils';

type CreateTaskProps = Task.TaskWithApplicant & {
  setTaskId: (param: string) => void;
};

const CreateTaskItem = ({
  _id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  status,
  applicant,
  expire,
  setTaskId,
}: CreateTaskProps) => {
  const { setPopup } = usePopupContext();
  const openDelete = async () => {
    setPopup('confirm');
  };
  const handleApplicant = (id: string) => {
    setTaskId(id);
    setPopup('applicant');
  };
  return (
    <div className="relative rounded-lg mb-3 flex text-white shadow-lg min-h-[160px] p-4 bg-slate-800">
      <button
        className="absolute text-3xl top-5 right-10"
        onClick={() => openDelete()}
      >
        <BiTrash />
      </button>
      <span className="absolute text-cyan-300 right-10 bottom-5">
        {formateTime(expire)}
      </span>
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
          {applicant.length > 0 && (
            <button onClick={() => handleApplicant(_id)} className="w-32 btn">
              查看所有申請人
            </button>
          )}
          {status}
        </div>
      </div>
    </div>
  );
};

export default CreateTaskItem;
