import { FC, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SignInPop from '../components/popup/SignInPop';
import TaskAddPop from '../components/popup/TaskAddPop';
import VipPopup from '../components/popup/VipPopup';
import { usePopupContext } from '../hooks/usePopupContext';

const Layout: FC = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const { showPopupName } = usePopupContext();
  const handleMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const renderComp = () => {
    switch (showPopupName) {
      case 'taskAdd':
        return <TaskAddPop />;
      case 'signIn':
        return <SignInPop />;
      case 'upgrade':
        return <VipPopup />;
      default:
        return null;
    }
  };
  return (
    <div className="h-screen">
      <Header handleMenu={handleMenu} />
      <Menu />
      <main className="h-[calc(100%-64px-40px)]">{children}</main>
      <Footer />
      {renderComp()}
    </div>
  );
};

export default Layout;
