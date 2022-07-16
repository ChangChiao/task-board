import { useRef } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

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
    <header className="text-white md:hidden">
      <Link href="/">
        <img src="" alt="" />
      </Link>

      <Avatar onClick={handleMenu} size={40} image={''} />
      <input type="checkbox" className="peer" />
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
