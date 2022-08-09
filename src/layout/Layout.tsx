import React, { useState, useEffect, useCallback } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import SignInPop from '../components/atoms/popup/SignInPop';
import TaskAddPop from '../components/atoms/popup/TaskAddPop';
import VipPopup from '../components/atoms/popup/VipPopup';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { usePopupContext } from '../hooks/usePopupContext';
import { userState } from '../store/user';
import { getUser } from '../utils/http/user';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const { showPopupName } = usePopupContext();
  const [, setUser] = useRecoilState(userState);
  const router = useRouter();
  const handleMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const queryUser = useCallback(async () => {
    const result = await getUser();
    const { status, data } = result;
    if (status === 'success') {
      setUser(data);
    }
  }, [setUser]);

  useEffect(() => {
    const { token } = router.query;
    if (token) {
      localStorage.setItem('token', token as string);
      queryUser();
      return;
    }
    queryUser();
  }, [router.query, queryUser]);

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
