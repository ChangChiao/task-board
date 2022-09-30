import { useEffect, useState } from 'react';

import AcceptedTaskItem from '../components/applyTask/AcceptedTaskItem';
import Tab from '../components/atoms/Tab';
import { getUserApplyTaskList } from '../utils/http';

const parma = {
  _id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  author: {
    avatar:
      'https://lh3.googleusercontent.com/a-/AFdZucoWzuj6qntm21vK6-E9cNgzLWXtnIIUrlP7HpLOaA=s96-c',
    isVip: false,
    name: 'Chiao Chang',
    _id: '62efd4c4d2c16f425e2c7469',
  },
  reward: 1000,
  status: 0,
  contactInfo: 'line Id 1232323',
  city: 'Taipei',
  expire: '2022-07-31T12:55:04.994Z',
};

const tabList = [
  { name: '進行中', id: 0 },
  { name: '已結束', id: 1 },
  { name: '已過期', id: 2 },
];

const AcceptedTask = () => {
  const [taskList, setTaskList] = useState<Task.TaskWithContact[] | []>([]);
  const [tab, setTab] = useState<number>(0);
  const getList = async () => {
    const res = await getUserApplyTaskList();
    if (res.status === 'success' && res.data) {
      setTaskList(res.data);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="wrapper">
      <Tab tab={tab} setTab={setTab} tabList={tabList} />
      {taskList.map((item) => (
        <AcceptedTaskItem key={item._id} {...item} />
      ))}
      <AcceptedTaskItem {...parma} />
    </div>
  );
};
export default AcceptedTask;
