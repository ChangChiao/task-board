import { FC, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Layout: FC = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className="h-screen">
      <Header handleMenu={handleMenu} />
      <Menu />
      <main className="h-[calc(100%-64px-40px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
