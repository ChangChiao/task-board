import { FC } from 'react';

import { usePopupContext } from '../../hooks/usePopupContext';
import { pickStaff } from '../../utils/http/task';
import Avatar from '../atoms/Avatar';
import PopupTemplate from './PopupTemplate';
// TODOTask.TaskWithApplicant
type ApplicantProps = {
  applicantList: any;
  taskId: string;
};
const ApplicantPop: FC<ApplicantProps> = ({
  applicantList,
  taskId,
}: ApplicantProps) => {
  const { showPopupName, setPopup } = usePopupContext();
  const handleClick = async (id: string) => {
    const params = {
      taskId,
      userId: id,
    };
    const result = await pickStaff(params);
    if (result.status === 'success') {
      setPopup('');
    }
  };
  return (
    <>
      {showPopupName === 'applicant' && (
        <PopupTemplate titleName="成為VIP">
          <ul>
            {applicantList.map((item: any) => (
              <li key={item._id}>
                {item}
                <Avatar image={item.avatar} />
                <span>{item.name}</span>
                <button onClick={() => handleClick(item._id)}>選擇</button>
              </li>
            ))}
          </ul>
        </PopupTemplate>
      )}
    </>
  );
};

export default ApplicantPop;
