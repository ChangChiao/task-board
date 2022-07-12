import { createContext } from 'react';

// eslint-disable-next-line import/no-cycle
import CardWall from '../components/CardWall';
import Pay from '../components/Pay';
// eslint-disable-next-line import/no-cycle
import TaskAddPop from '../components/popup/TaskAddPop';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { PopupContextProvider } from '../hooks/usePopupContext';

type PopupType = {
  isPopupShow: boolean;
  setPopup: (value: boolean) => void;
};

export const context = createContext<PopupType>({} as PopupType);
const Index = () => {
  return (
    <PopupContextProvider>
      <SignUp />
      <SignIn />
      <Pay />
      <CardWall />
      <TaskAddPop />
    </PopupContextProvider>
  );
};
export default Index;
