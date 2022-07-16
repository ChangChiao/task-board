import { useRef } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { MENU } from '../config';
import Avatar from './atoms/Avatar';

type HeaderParam = {
  handleMenu: () => void;
};

const Header = ({ handleMenu }: HeaderParam) => {
  const isShowMenu = useRef(false);
  const handClick = () => {
    isShowMenu.current = !isShowMenu.current;
  };

  return (
    <header className="flex items-center h-16 px-4 text-white bg-cyan-900">
      <Link href="/">
        <img
          className="w-20 h-20"
          src="/assets/logo/logo_size_invert.jpg"
          alt=""
        />
      </Link>

      <ul className="flex flex-1 pl-10">
        {MENU.map((item) => (
          <li className="pr-4" key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <Avatar image={'/assets/avatar/1.png'} />
        <span className="pl-3">userName</span>
      </div>
      <input type="checkbox" className="hidden peer" />
      <div
        onClick={handClick}
        className={clsx(
          isShowMenu.current && 'active',
          'mobile w-[60px] h-[60px] absolute top-0 right-[10px] cursor-pointer hidden items-center justify-center'
        )}
      >
        <span className="hamburg"></span>
      </div>
      <style jsx>
        {`
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
            @apply bg-white content-[''] absolute w-full h-full ease-in-out duration-[30];
          }
          .hamburg::before {
            @apply -top-[10px];
          }
          .hamburg::after {
            @apply -bottom-[10px];
          }
        `}
      </style>
    </header>
  );
};

export default Header;
