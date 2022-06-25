import { SubmitHandler, useForm } from 'react-hook-form';

import { signUp } from '../utils/http/auth';

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('data', data);
    await signUp(data);
  };
  return (
    <div>
      <form className="flex flex-col w-28" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="field"
          placeholder="email"
          type="email"
          {...register('email')}
          // {...(register('email'), { required: true })}
        />
        {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <input
          className="field"
          placeholder="password"
          type="password"
          {...register('password')}
          // {...(register('password'), { required: true })}
        />
        <input
          className="field"
          placeholder="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          // {...(register('confirmPassword'), { required: true })}
        />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
