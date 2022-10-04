import { useCallback, useEffect, useMemo, useState } from 'react';

import { NextPage } from 'next';

import ApplicantPop from '../components/atoms/popup/ApplicantPop';
import ConfirmPop from '../components/atoms/popup/ConfirmPop';
import Tab from '../components/atoms/Tab';
import CreateTaskItem from '../components/createTask/CreateTaskItem';
import { usePopupContext } from '../hooks/usePopupContext';
import { getUserCreateTaskList } from '../utils/http/task';

const parma = {
  _id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  expire: '2022-07-31T11:14:00.880Z',
  author: {
    avatar:
      'https://lh3.googleusercontent.com/a-/AFdZucoWzuj6qntm21vK6-E9cNgzLWXtnIIUrlP7HpLOaA=s96-c',
    isVip: false,
    name: 'Chiao Chang',
    _id: '62efd4c4d2c16f425e2c7469',
  },
  reward: 1000,
  status: 1,
  contactInfo: 'line Id 1232323',
  city: 'Taipei',
  applicant: [],
};

const tabList = [
  { name: '進行中', id: 0 },
  { name: '已結束', id: 1 },
  { name: '已過期', id: 2 },
];

const CreateTask: NextPage = () => {
  const [tab, setTab] = useState<number>(0);
  const [taskId, setTaskId] = useState<string>('');
  const [taskList, setTaskList] = useState<Task.TaskWithApplicant[] | []>([]);
  const { showPopupName } = usePopupContext();
  const getList = useCallback(async () => {
    const res = await getUserCreateTaskList();

    if (res.status === 'success') {
      setTaskList(res.data as Task.TaskWithApplicant[]);
    }
    console.log('res', res);
  }, []);
  useEffect(() => {
    getList();
  }, []);

  const applicantList = useMemo(() => {
    return taskList.find((item) => item._id === taskId)?.applicant;
  }, [taskList, taskId]);

  const filterTaskList = useMemo(() => {
    return taskList.filter((item) => item.status === tab);
  }, [taskList, tab]);

  return (
    <div className="wrapper">
      <Tab tab={tab} setTab={setTab} tabList={tabList} />
      {filterTaskList?.map((item) => (
        <CreateTaskItem setTaskId={setTaskId} key={item._id} {...item} />
      ))}
      <CreateTaskItem setTaskId={setTaskId} {...parma} />
      <ApplicantPop applicantList={applicantList} taskId={taskId} />
      {showPopupName === 'confirm' && (
        <ConfirmPop getList={getList} taskId={taskId} />
      )}
    </div>
  );
};
export default CreateTask;
