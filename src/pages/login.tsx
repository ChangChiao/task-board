import { useEffect } from 'react';

import type { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { userState } from '../store/state';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const LoginPage: NextPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  useEffect(() => setUser({}));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <input type="email" {...register('email')} />
      <input type="password" {...register('lastName')} />
      <input type="submit" />
      {{ user }}
    </form>
  );
};
