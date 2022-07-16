import Link from 'next/link';

import Avatar from './atoms/Avatar';

const Menu = () => {
  const menuList = [
    { text: '我要發任務', link: '' },
    { text: '我接的任務', link: '' },
    { text: '收藏清單', link: '' },
    { text: '個人資訊', link: '' },
    { text: '登出', link: '' },
  ];
  const userList = [
    { text: '個人資訊', link: '' },
    { text: '登出', link: '' },
  ];
  return (
    <div className="w-[300px] p-4 text-white h-screen bg-cyan-900">
      <img
        className="w-20 h-20"
        src="/assets/logo/logo_size_invert.jpg"
        alt=""
      />
      <ul>
        {menuList.map((item) => (
          <li className="py-2" key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="pt-10">
        <div className="flex items-center">
          <Avatar image={'/assets/avatar/1.png'} />
          <span>userName</span>
        </div>
        <ul>
          {userList.map((item) => (
            <li key={item.text}>
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
