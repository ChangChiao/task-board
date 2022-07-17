import { FC, useState } from 'react';

import { usePopupContext } from '../hooks/usePopupContext';
import Card from './atoms/Card';
import CardPopup from './popup/CardPopup';

const parma = {
  id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  author: 'chang',
  reward: 1000,
  status: 0,
  // startTime: new Date(),
};

const CardWall: FC = () => {
  const [detail, setDetail] = useState({});
  const { showPopupName } = usePopupContext();
  return (
    <>
      <Card {...parma} setDetail={setDetail} />
      {showPopupName === 'card' && <CardPopup {...detail} {...parma} />}
      {/* {showPopupName && <TaskAddPop />} */}
    </>
  );
};

export default CardWall;
