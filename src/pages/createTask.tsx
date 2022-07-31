import { NextPage } from 'next';

import CreateTaskItem from '../components/createTask/CreateTaskItem';

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
};

const createTask: NextPage = () => {
  return (
    <div>
      <CreateTaskItem {...parma} />
    </div>
  );
};
export default createTask;
