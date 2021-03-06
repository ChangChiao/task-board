import { FC, useRef, useState, RefObject } from 'react';

import { GetStaticProps } from 'next';

import { usePopupContext } from '../hooks/usePopupContext';
import { getAllTask } from '../utils/http';
import Card from './atoms/Card';
import CardPopup from './popup/CardPopup';

export const getStaticProps: GetStaticProps = async () => {
  const result = await getAllTask({});
  const cardList = result.data;
  return {
    props: {
      cardList,
    },
  };
};

const parma = {
  id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  author: 'chang',
  reward: 1000,
  status: 0,
  city: 'Taipei',
  // startTime: new Date(),
};

const CardWall: FC = () => {
  const cardWallRef = useRef() as RefObject<HTMLDivElement>;
  const [detail, setDetail] = useState({});
  const { showPopupName } = usePopupContext();

  const handleScroll = () => {
    if (cardWallRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = cardWallRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('isBottom!');
      }
    }
  };
  return (
    <div
      onScroll={handleScroll}
      ref={cardWallRef}
      className="flex flex-wrap justify-between p-10 max-w-[1600px]"
    >
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      {showPopupName === 'card' && <CardPopup {...detail} {...parma} />}
      {/* {showPopupName && <TaskAddPop />} */}
    </div>
  );
};

export default CardWall;
