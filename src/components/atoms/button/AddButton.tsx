import { FC } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

const AddButton: FC = () => {
  return (
    <button className="fixed flex items-center justify-center w-20 h-20 text-3xl text-white rounded-full bottom-5 right-5 bg-cyan-900">
      <AiOutlinePlus />
    </button>
  );
};

export default AddButton;
