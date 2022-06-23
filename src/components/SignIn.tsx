import { useEffect } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { useRecoilState } from 'recoil';

import { BASE_URL } from '../config';
import { userState } from '../store/state';

const oauthGoogle = `${BASE_URL}/auth/google`;
const oauthFB = `${BASE_URL}/auth/facebook`;

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const SignIn = () => {
  const [user, setUser] = useRecoilState(userState);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  useEffect(() => setUser({}));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('lastName')} />
        <input type="submit" />
        {{ user }}
      </form>
      <button>
        <a className="flex items-center" href={oauthGoogle}>
          <FcGoogle className="mr-2" />
          Sign up with Google
        </a>
      </button>
      <button>
        <a className="flex items-center" href={oauthFB}>
          <GrFacebook className="mr-2" />
          Sign up with FaceBook
        </a>
      </button>
    </div>
  );
};

export default SignIn;
