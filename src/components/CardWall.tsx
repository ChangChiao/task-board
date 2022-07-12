import { FC, useEffect } from 'react';

import { usePopupContext } from '../hooks/usePopupContext';
import Card from './atoms/Card';
import TaskAddPop from './popup/TaskAddPop';

const parma = {
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  author: 'chang',
  reward: 1000,
  status: 0,
  // startTime: new Date(),
};

const CardWall: FC = () => {
  const { isPopupShow } = usePopupContext();
  useEffect(() => {
    console.log('666666', isPopupShow);
  }, [isPopupShow]);
  return (
    <>
      <Card {...parma} />
      {isPopupShow && <TaskAddPop />}
    </>
  );
};

export default CardWall;
