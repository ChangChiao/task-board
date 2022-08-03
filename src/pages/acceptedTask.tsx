import { useState } from 'react';

import AcceptedTaskItem from '../components/applyTask/AcceptedTaskItem';
import Tab from '../components/atoms/Tab';

const parma = {
  id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  author: 'chang',
  reward: 1000,
  status: 0,
  contactInfo: 'line Id 1232323',
  city: 'Taipei',
  expire: '2022-07-31T12:55:04.994Z',
};

const tabList = [
  { name: '進行中', id: 'inProgress' },
  { name: '已結束', id: 'end' },
  { name: '已過期', id: 'expired' },
];

const AcceptedTask = () => {
  const [tab, setTab] = useState<string>('inProgress');
  return (
    <div className="wrapper">
      <Tab tab={tab} setTab={setTab} tabList={tabList} />
      <AcceptedTaskItem {...parma} />
    </div>
  );
};
export default AcceptedTask;
