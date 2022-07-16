import Link from 'next/link';

import { MENU } from '../config';
import Avatar from './atoms/Avatar';

const Menu = () => {
  return (
    <div className="w-full h-screen p-4 text-white bg-cyan-900 md:hidden">
      <img
        className="w-20 h-20"
        src="/assets/logo/logo_size_invert.jpg"
        alt=""
      />
      <div className="flex items-center py-8">
        <Avatar image={'/assets/avatar/1.png'} />
        <span className="pl-3">userName</span>
      </div>
      <ul>
        {MENU.map((item) => (
          <li className="py-2" key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
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
