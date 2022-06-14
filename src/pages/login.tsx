import { useEffect } from 'react';

import type { NextPage } from 'next';
// import { useState, useEffect, useCallback } from "react";
import { useRecoilState } from 'recoil';

import { userState } from '../store/state';

export const LoginPage: NextPage = () => {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => setUser({}));
  return <>{user}</>;
};
