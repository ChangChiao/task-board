import Link from 'next/link';

const Menu = () => {
  const menuList = [
    { text: '我要發任務', link: '' },
    { text: '我接的任務', link: '' },
    { text: '收藏清單', link: '' },
    { text: '個人資訊', link: '' },
    { text: '登出', link: '' },
  ];
  return (
    <div>
      <ul>
        {menuList.map((item) => (
          <li key={item.text}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
