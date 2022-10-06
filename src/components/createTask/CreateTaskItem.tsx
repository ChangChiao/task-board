import { BiTrash } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { usePopupContext } from '../../hooks/usePopupContext';
import { formateTime } from '../../utils';
import Avatar from '../atoms/Avatar';

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
  staff,
  city,
  applicant,
  expire,
  setTaskId,
}: CreateTaskProps) => {
  const { setPopup } = usePopupContext();
  const openDelete = async () => {
    setTaskId(_id);
    setPopup('confirm');
  };
  const handleApplicant = () => {
    setTaskId(_id);
    setPopup('applicant');
  };
  return (
    <div className="relative rounded-lg mb-3 flex text-white shadow-lg min-h-[160px] p-4 bg-slate-800">
      {status === 2 && (
        <div className="absolute top-0 z-10 w-full h-full bg-black/40"></div>
      )}
      {status === 0 && (
        <button
          className="absolute text-3xl top-5 right-10"
          onClick={openDelete}
        >
          <BiTrash />
        </button>
      )}
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
        {status === 0 && (
          <div className="flex">
            <div className="flex items-center pr-2">
              <BsPeopleFill className="mr-1" />
              申請人數 {applicant?.length}
            </div>
            {applicant.length > 0 && (
              <button onClick={handleApplicant} className="w-32 btn">
                查看所有申請人
              </button>
            )}
          </div>
        )}
        {status === 1 && (
          <div className="flex items-center">
            <span>合作夥伴</span>
            {staff[0] && (
              <div className="flex items-center pl-2">
                <Avatar image={staff[0].avatar} />
                <span className="pl-2">{staff[0].name}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTaskItem;
