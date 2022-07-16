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
  const { isPopupShow } = usePopupContext();
  return (
    <>
      <Card {...parma} setDetail={setDetail} />
      {isPopupShow && <CardPopup {...detail} {...parma} />}
      {/* {isPopupShow && <TaskAddPop />} */}
    </>
  );
};

export default CardWall;
