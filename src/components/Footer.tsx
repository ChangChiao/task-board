import { FC } from 'react';

const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center h-10 p-4 text-white bg-slate-900">{`© ${year} Task Board™. All Rights Reserved.`}</footer>
  );
};

export default Footer;
