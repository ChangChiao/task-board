import { useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { useRecoilState } from 'recoil';
import * as Yup from 'yup';

import { BASE_URL } from '../config';
import { userState } from '../store/state';

const oauthGoogle = `${BASE_URL}/auth/google`;
const oauthFB = `${BASE_URL}/auth/facebook`;

type FormValues = {
  email: string;
  password: string;
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required('信箱為必填').email('信箱格式無效'),
  password: Yup.string()
    .required('密碼為必填')
    .min(8, '密碼至少為8個字元')
    .max(16, '密碼不可超過16個字元'),
});

const SignIn = () => {
  const [user, setUser] = useRecoilState(userState);
  console.log('user', user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  useEffect(() => setUser({}), []);
  return (
    <div>
      <form className="flex flex-col w-28" onSubmit={handleSubmit(onSubmit)}>
        <input className="field" {...register('email')} />
        {errors.email?.message && (
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        )}
        <input className="field" type="password" {...register('password')} />
        {errors.password?.message && (
          <span className="text-sm text-red-500">
            {errors.password?.message}
          </span>
        )}
        <input className="btn" type="submit" />
      </form>
      <button className="field">
        <a className="flex items-center" href={oauthGoogle}>
          <FcGoogle className="mr-2" />
          Sign up with Google
        </a>
      </button>
      <button className="field">
        <a className="flex items-center" href={oauthFB}>
          <GrFacebook className="mr-2" />
          Sign up with FaceBook
        </a>
      </button>
    </div>
  );
};

export default SignIn;
