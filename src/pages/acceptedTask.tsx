import AcceptedTaskItem from '../components/applyTask/AcceptedTaskItem';

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

const acceptedTask = () => {
  return (
    <div className="wrapper">
      <AcceptedTaskItem {...parma} />
    </div>
  );
};
export default acceptedTask;
