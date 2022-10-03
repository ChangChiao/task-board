import { useMemo, useRef } from 'react';

import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { MENU } from '../config';
import { usePopupContext } from '../hooks/usePopupContext';
import { userState } from '../store/user';
import Avatar from './atoms/Avatar';

type HeaderParam = {
  handleMenu: () => void;
};

const Header = ({ handleMenu }: HeaderParam) => {
  const { data: session } = useSession();
  console.log('session', session);
  const [user, setUser] = useRecoilState(userState);
  const isShowMenu = useRef(false);
  const router = useRouter();
  const { setPopup } = usePopupContext();
  const menuList = useMemo(() => {
    if (user.isVip) {
      return MENU.filter((item) => item.id !== 'vip');
    }
    return MENU;
  }, [user]);
  const handClick = () => {
    handleMenu();
    isShowMenu.current = !isShowMenu.current;
  };
  const handleClickMenu = ({ link, id }: Menu.MenuItem) => {
    if (!user?.id) {
      toast('請先登入!');
      return;
    }
    if (id === 'vip') {
      setPopup('upgrade');
      return;
    }
    router.push(link);
  };
  const signIn = () => {
    setPopup('signIn');
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser({});
  };

  return (
    <header className="flex items-center h-16 px-4 text-white bg-cyan-900">
      <Link href="/">
        <img
          className="w-16 h-16 cursor-pointer"
          src="/assets/logo/logo_size_invert.jpg"
          alt=""
        />
      </Link>

      <ul className="flex-1 hidden pl-10 md:flex">
        {menuList.map((item) => (
          <li
            onClick={() => handleClickMenu(item)}
            className="pr-4 cursor-pointer hover:text-slate-200"
            key={item.text}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div className="items-center hidden md:flex">
        {user.id ? (
          <>
            <div className="flex items-center mr-2">
              <Avatar image={user?.avatar || '/assets/avatar/1.png'} />
              <span className="pl-3">{user?.name ?? 'userName'}</span>
            </div>
            <button onClick={signOut}>登出</button>
          </>
        ) : (
          <button onClick={signIn}>登入</button>
        )}
      </div>
      <input type="checkbox" className="hidden peer" />
      <div
        onClick={handClick}
        className={clsx(
          isShowMenu.current && 'active',
          'mobile w-[40px] h-[40px] absolute top-0 right-[10px] cursor-pointer block md:hidden items-center justify-center'
        )}
      >
        <span className="hamburg"></span>
      </div>
      <style jsx>
        {`
          .mobile .hamburg {
            @apply bg-white w-full h-[3px] absolute top-[30px];
          }
          .hamburg::before {
            @apply -top-[12px];
          }
          .hamburg::after {
            @apply -bottom-[12px];
          }
          .mobile.active .hamburg {
            @apply rotate-45;
          }
          .mobile.active .hamburg::before {
            @apply rotate-90 top-0;
          }
          .mobile.active .hamburg::after {
            @apply rotate-90 bottom-0;
          }
          .hamburg::before,
          .hamburg::after {
            @apply bg-white content-[''] absolute w-full h-[3px] ease-in-out duration-[50];
          }
        `}
      </style>
    </header>
  );
};

export default Header;
