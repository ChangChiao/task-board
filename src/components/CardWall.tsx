import { FC } from 'react';

import Card from './atoms/Card';

const parma = {
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  author: 'chang',
  reward: 1000,
  status: 1,
  // startTime: new Date(),
};

const CardWall: FC = () => {
  return (
    <>
      <Card {...parma} />
    </>
  );
};

export default CardWall;
