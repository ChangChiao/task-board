import { useState } from 'react';

import { toast } from 'react-toastify';

import { useChat } from '../../../hooks/useChat';
import { usePopupContext } from '../../../hooks/usePopupContext';
import { getRoomId } from '../../../utils/http/chat';
import { pickStaff } from '../../../utils/http/task';
import Avatar from '../Avatar';
import PopupTemplate from './PopupTemplate';
// TODOTask.TaskWithApplicant
type ApplicantProps = {
  applicantList: any;
  taskId: string;
};
const ApplicantPop = ({ applicantList, taskId }: ApplicantProps) => {
  const { showPopupName, setPopup } = usePopupContext();
  const { handleRoom } = useChat();
  const [pending, setPending] = useState<Boolean>(false);
  const handleClick = async (id: string) => {
    const params = {
      taskId,
      userId: id,
    };
    const result = await pickStaff(params);
    if (result.status === 'success') {
      toast(result.message);
      setPopup('');
    }
  };

  const sendMessage = async (id: string) => {
    if (pending) return;
    const sendData = {
      receiver: id,
    };
    try {
      setPending(true);
      const res = await getRoomId(sendData);
      const { roomId, name, avatar } = res.data;
      handleRoom({ roomId, name, avatar });
    } catch (error) {
      console.log('error', error);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {showPopupName === 'applicant' && (
        <PopupTemplate titleName="所有申請者">
          <ul>
            {applicantList.map((item: any) => (
              <li key={item._id}>
                {item}
                <Avatar image={item.avatar} />
                <span>{item.name}</span>
                <button onClick={() => handleClick(item._id)}>選擇</button>
                <button onClick={() => sendMessage(item._id)}>私訊</button>
              </li>
            ))}
          </ul>
        </PopupTemplate>
      )}
    </>
  );
};

export default ApplicantPop;
