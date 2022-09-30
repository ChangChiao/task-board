import { useMemo } from 'react';

import Link from 'next/link';
import { useRecoilState } from 'recoil';

import { MENU } from '../config';
import { usePopupContext } from '../hooks/usePopupContext';
import { userState } from '../store/user';
import Avatar from './atoms/Avatar';

const Menu = () => {
  const { setPopup } = usePopupContext();
  const [user, setUser] = useRecoilState(userState);
  const signIn = () => {
    setPopup('signIn');
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser({});
  };

  const menuList = useMemo(() => {
    if (user.isVip) {
      return MENU.filter((item) => item.id !== 'vip');
    }
    return MENU;
  }, [user]);
  return (
    <div className="w-full h-screen p-4 text-white bg-cyan-900 md:hidden">
      <img
        className="w-20 h-20"
        src="/assets/logo/logo_size_invert.jpg"
        alt=""
      />
      <div className="flex items-center py-8">
        <Avatar image={user?.avatar || '/assets/avatar/1.png'} />
        <span className="pl-3">{user?.name ?? 'userName'}</span>
      </div>
      <ul>
        {menuList.map((item) => (
          <li className="py-2" key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
        <li className="py-2">
          {user.id ? (
            <button onClick={signOut}>登出</button>
          ) : (
            <button onClick={signIn}>登入</button>
          )}
        </li>
      </ul>
      {/* <div className="pt-10">
        <ul>
          {userList.map((item) => (
            <li key={item.text}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Menu;
