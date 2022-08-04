import { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import * as Yup from 'yup';

import { userState } from '../store/user';
import Avatar from './atoms/Avatar';
import UploadFile from './UploadFile';

type FormValues = {
  name: string;
  contact: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('暱稱為必填'),
  contact: Yup.string().required('聯絡方式為必填'),
});

const UserInfoUpdate = () => {
  const [avatar, setAvatar] = useState<string>('');
  const [file, setUploadFile] = useState<File | null>(null);
  const [user, setUser] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setUser({
      name: '',
    });
    toast('');
  };

  // const createImgURL = (file) => {
  //   return window.URL.createObjectURL(file)
  // }

  useEffect(() => {
    setAvatar(user.avatar!);
    reset({
      name: user.name,
      contact: user.contact,
    });
  }, [user]);

  useEffect(() => {
    const url = window.URL.createObjectURL(file as Blob);
    setAvatar(url);
  }, [file]);

  useEffect(() => {}, [file]);
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Avatar image={avatar} />
      <UploadFile setUploadFile={setUploadFile} />
      <input className="field" {...register('name')} />
      {errors.name?.message && (
        <span className="text-sm text-red-500">{errors.name?.message}</span>
      )}
      <textarea {...register('contact')} cols={30} rows={10}></textarea>
      {errors.contact?.message && (
        <span className="text-sm text-red-500">{errors.contact?.message}</span>
      )}
      <input className="mt-2 btn" value="送出" type="submit" />
    </form>
  );
};

export default UserInfoUpdate;
