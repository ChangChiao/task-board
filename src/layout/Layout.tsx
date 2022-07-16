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
      <main className="flex">
        <Menu />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
