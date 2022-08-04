import { toast } from 'react-toastify';

import { usePopupContext } from '../../hooks/usePopupContext';
import { deleteTask } from '../../utils/http';
import PopupTemplate from './PopupTemplate';

type ConfirmProps = {
  taskId: string;
};
const ConfirmPop = ({ taskId }: ConfirmProps) => {
  const { showPopupName, setPopup } = usePopupContext();
  const closePopup = () => {
    setPopup('');
  };
  const handleClick = async () => {
    const result = await deleteTask(taskId);
    if (result.status === 'success') {
      toast('刪除成功');
      setPopup('');
    }
  };
  return (
    <>
      {showPopupName === 'confirm' && (
        <PopupTemplate titleName="刪除任務">
          <p>您確定要刪除任務?</p>
          <div>
            <button className="bg-gray-400 w-36 btn" onClick={closePopup}>
              取消
            </button>
            <button className="w-36 btn" onClick={handleClick}>
              確定
            </button>
          </div>
        </PopupTemplate>
      )}
    </>
  );
};

export default ConfirmPop;
