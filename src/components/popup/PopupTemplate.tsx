import React, { FC, ReactNode } from 'react';

import { usePopupContext } from '../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle

type PopupType = {
  titleName: string;
  children?: ReactNode | null;
};

const PopupTemplate: FC<PopupType> = ({ children, titleName }: PopupType) => {
  const { setPopup } = usePopupContext();
  const handlePop = () => {
    setPopup('');
  };
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 w-full h-full"
    >
      <div className="mask"></div>
      <div className=" absolute h-[500px] py-2 px-6 top-0 right-0 left-0 bottom-0 m-auto bg-gray-200 rounded-lg w-1/3 max-w-[400px] shadow">
        <h3 className="pt-2 text-xl text-center">{titleName}</h3>
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          data-modal-toggle="authentication-modal"
          onClick={handlePop}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default PopupTemplate;
