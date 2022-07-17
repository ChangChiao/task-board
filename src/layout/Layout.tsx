import { FC, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SignInPop from '../components/popup/SignInPop';
import TaskAddPop from '../components/popup/TaskAddPop';
import { usePopupContext } from '../hooks/usePopupContext';

const Layout: FC = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const { showPopupName } = usePopupContext();
  const handleMenu = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className="h-screen">
      <Header handleMenu={handleMenu} />
      <Menu />
      <main className="h-[calc(100%-64px-40px)]">{children}</main>
      <Footer />
      {showPopupName === 'taskAdd' && <TaskAddPop />}
      {showPopupName === 'signIn' && <SignInPop />}
    </div>
  );
};

export default Layout;
