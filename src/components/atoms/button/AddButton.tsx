import { AiOutlinePlus } from 'react-icons/ai';

import { usePopupContext } from '../../../hooks/usePopupContext';

const AddButton = () => {
  const { setPopup } = usePopupContext();
  const handleClick = () => {
    setPopup('taskAdd');
  };
  return (
    <button
      onClick={handleClick}
      className="fixed z-20 flex items-center justify-center w-20 h-20 text-3xl text-white rounded-full bottom-5 right-5 bg-cyan-900"
    >
      <AiOutlinePlus />
    </button>
  );
};

export default AddButton;
