import Card from '../components/atoms/Card';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const parma = {
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  author: 'chang',
  reward: 1000,
  // startTime: new Date(),
};

const Index = () => (
  <>
    <SignUp />
    <SignIn />
    <Card {...parma} />
    {/* <Base /> */}
  </>
);
export default Index;
