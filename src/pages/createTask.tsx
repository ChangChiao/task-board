import { useState } from 'react';

import { NextPage } from 'next';

import AddButton from '../components/atoms/button/AddButton';
import Tab from '../components/atoms/Tab';
import CreateTaskItem from '../components/createTask/CreateTaskItem';
import ApplicantPop from '../components/popup/ApplicantPop';
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

const tabList = [
  { name: '進行中', id: 0 },
  { name: '已結束', id: 1 },
  { name: '已過期', id: 2 },
];

const CreateTask: NextPage = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="wrapper">
      <Tab tab={tab} setTab={setTab} tabList={tabList} />
      <CreateTaskItem {...parma} />
      <AddButton />
      <ApplicantPop applicantList={[]} taskId="1233333" />
    </div>
  );
};
export default CreateTask;
