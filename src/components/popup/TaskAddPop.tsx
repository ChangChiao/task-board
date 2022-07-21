import { FC, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';
import { usePopupContext } from '../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle
import CitySelect from '../atoms/CitySelect';
import PopupTemplate from './PopupTemplate';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('標題為必填'),
  reward: Yup.string().required('酬勞為必填'),
  description: Yup.string().required('內容為必填'),
});

const TaskAddPop: FC = () => {
  const { showPopupName } = usePopupContext();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Card.CardCreate>({
    resolver: yupResolver(validationSchema),
  });
  const [startDate, setStartDate] = useState(new Date());
  const [city, setCity] = useState<string>('');
  const onSubmit: SubmitHandler<Card.CardCreate> = (data) => {
    console.log(data);
    // if (data.remember) {
    //   localStorage.setItem('email', data.email);
    // }
  };
  return (
    <>
      {showPopupName === 'signIn' && (
        <PopupTemplate titleName="新增任務">
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
            <textarea {...register('description')} />
            {errors.description?.message && (
              <span className="text-sm text-red-500">
                {errors.description?.message}
              </span>
            )}
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <CitySelect city={city} setCity={setCity} />
            <input className="btn" type="submit" />
          </form>
        </PopupTemplate>
      )}
    </>
  );
};

export default TaskAddPop;
