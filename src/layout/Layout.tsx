import { FC, useState } from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';

const Layout: FC = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div>
      <Header handleMenu={handleMenu} />
      {isShowMenu && <Menu />}
      {children}
    </div>
  );
};

export default Layout;
