import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { sendData } from 'next/dist/server/api-utils';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import 'react-datepicker/dist/react-datepicker.css';
import { usePopupContext } from '../../../hooks/usePopupContext';
// eslint-disable-next-line import/no-cycle
import { addTask } from '../../../utils/http';
import UploadFile from '../../UploadFile';
import CitySelect from '../CitySelect';
import PopupTemplate from './PopupTemplate';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('標題為必填'),
  reward: Yup.string().required('酬勞為必填'),
  description: Yup.string().required('內容為必填'),
});

const TaskAddPop = () => {
  const { showPopupName } = usePopupContext();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<Task.TaskCreate>({
    resolver: yupResolver(validationSchema),
  });
  const [file, setUploadFile] = useState<File | null>(null);
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [city, setCity] = useState<string>('Taipei');
  const onSubmit: SubmitHandler<Task.TaskCreate> = async (data) => {
    const { title, reward, description } = data;
    const formData = new FormData();
    if (!file) {
      toast.error('請上傳封面照！');
      return;
    }
    formData.append('file', file);
    formData.append('title', title);
    formData.append('reward', reward.toString());
    formData.append('description', description);
    formData.append('expire', endDate.toISOString());

    console.log(sendData);
    const res = await addTask(formData);
    if (res?.status === 'success') {
      toast(res.message);
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };
  return (
    <>
      {showPopupName === 'taskAdd' && (
        <PopupTemplate titleName="新增任務">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="field"
              placeholder="標題"
              {...register('title')}
            />
            {errors.title?.message && (
              <span className="text-sm text-red-500">
                {errors.title?.message}
              </span>
            )}
            <input
              className="field"
              placeholder="酬勞"
              {...register('reward')}
            />
            {errors.reward?.message && (
              <span className="text-sm text-red-500">
                {errors.reward?.message}
              </span>
            )}
            <textarea
              placeholder="描述"
              className="w-full"
              {...register('description')}
            />
            {errors.description?.message && (
              <span className="text-sm text-red-500">
                {errors.description?.message}
              </span>
            )}
            <div className="flex">
              <span className="block w-20 text-slate-700">截止日</span>
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
              />
            </div>
            <CitySelect city={city} handleCityChange={handleCityChange} />
            <UploadFile setUploadFile={setUploadFile} />
            <input className="btn" type="submit" />
          </form>
        </PopupTemplate>
      )}
    </>
  );
};

export default TaskAddPop;
