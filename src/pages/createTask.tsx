import { NextPage } from 'next';

import AddButton from '../components/atoms/button/AddButton';
import CreateTaskItem from '../components/createTask/CreateTaskItem';
// import { getUserCreateTaskList } from '../utils/http/task';

// export const getStaticProps: GetStaticProps = async () => {
//   const result = await getUserCreateTaskList();
//   const cardList = result.data;
//   return {
//     props: {
//       cardList,
//     },
//   };
// };

const parma = {
  id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  expire: '2022-07-31T11:14:00.880Z',
  author: 'chang',
  reward: 1000,
  status: 0,
  contactInfo: 'line Id 1232323',
  city: 'Taipei',
  applicant: [],
};

const createTask: NextPage = () => {
  return (
    <div className="wrapper">
      <CreateTaskItem {...parma} />
      <AddButton />
    </div>
  );
};
export default createTask;
