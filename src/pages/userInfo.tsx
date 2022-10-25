import React from 'react';

import { NextPage } from 'next';

import UserInfoUpdate from '@/components/UserInfoUpdate';

export const UserInfo: NextPage = () => {
  return (
    <div>
      <UserInfoUpdate />
    </div>
  );
};

export default UserInfo;
