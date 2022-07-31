import ApplyTaskItem from '../components/applyTask/ApplyTaskItem';

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

const acceptedTask = () => {
  return (
    <div>
      <ApplyTaskItem {...parma} />
    </div>
  );
};
export default acceptedTask;
