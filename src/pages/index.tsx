import Card from '../components/atoms/Card';
import Pay from '../components/Pay';
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
    <Pay />
    <Card {...parma} />
    {/* <Base /> */}
  </>
);
export default Index;
