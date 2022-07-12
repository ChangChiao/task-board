import { createContext, useContext, useEffect, useState } from 'react';

type PopupType = {
  isPopupShow: boolean;
  setPopup: (value: boolean) => void;
};

const Context = createContext<PopupType>({} as PopupType);

export const PopupContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isPopupShow, setPopup] = useState<boolean>(false);
  useEffect(() => {
    console.log('8777', isPopupShow);
  }, [isPopupShow]);
  return (
    <Context.Provider value={{ isPopupShow, setPopup }}>
      {children}
    </Context.Provider>
  );
};

export const usePopupContext = () => {
  const popupContext = useContext(Context);
  return popupContext;
};
