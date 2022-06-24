import Link from 'next/link';

import Avatar from './atoms/Avatar';

type HeaderParam = {
  handleMenu: () => void;
};

const Header = ({ handleMenu }: HeaderParam) => {
  return (
    <header>
      <Link href="/">
        <img src="" alt="" />
      </Link>

      <Avatar onClick={handleMenu} size={40} image={''} />
    </header>
  );
};

export default Header;
