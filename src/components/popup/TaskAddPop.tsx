import { FC, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';
import { usePopupContext } from '../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle
import PopupTemplate from './PopupTemplate';

type FormValues = {
  title: string;
  reward: number;
  content: string;
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required('標題為必填'),
  reward: Yup.string().required('酬勞為必填'),
  content: Yup.string().required('內容為必填'),
});

const TaskAddPop: FC = () => {
  const { isPopupShow } = usePopupContext();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    // if (data.remember) {
    //   localStorage.setItem('email', data.email);
    // }
  };
  return (
    <>
      {isPopupShow && (
        <PopupTemplate>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input className="field" {...register('title')} />
            {errors.title?.message && (
              <span className="text-sm text-red-500">
                {errors.title?.message}
              </span>
            )}
            <input className="field" {...register('reward')} />
            {errors.reward?.message && (
              <span className="text-sm text-red-500">
                {errors.reward?.message}
              </span>
            )}
            <textarea {...register('content')} />
            {errors.content?.message && (
              <span className="text-sm text-red-500">
                {errors.content?.message}
              </span>
            )}
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <input className="btn" type="submit" />
          </form>
        </PopupTemplate>
      )}
    </>
  );
};

export default TaskAddPop;
