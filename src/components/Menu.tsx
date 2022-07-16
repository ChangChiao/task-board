import Link from 'next/link';

import { MENU } from '../config';
import Avatar from './atoms/Avatar';

const Menu = () => {
  // const userList = [
  //   { text: '個人資訊', link: '' },
  //   { text: '登出', link: '' },
  // ];
  return (
    <div className="w-[300px] p-4 text-white h-screen bg-cyan-900">
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
