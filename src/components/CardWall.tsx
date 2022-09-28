import { useRef, useState, RefObject } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { usePopupContext } from '../hooks/usePopupContext';
import { getAllTask } from '../utils/http';
import Card from './atoms/Card';
import CardSkeleton from './atoms/CardSkeleton';
import CardPopup from './atoms/popup/CardPopup';

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await getAllTask({});
  let cardList: Task.TaskDetail[] | [] = [];
  if (result.status === 'success') {
    cardList = result.data ?? [];
  }
  return {
    props: {
      cardList,
    },
  };
};

const parma = {
  _id: '13232323231233',
  title: 'heorkpeook reorepowkr',
  description: 'reowprkoperopwerfewrwe[rwe[]rl',
  cover: '/assets/images/image-equilibrium.jpg',
  author: 'chang',
  reward: 1000,
  status: 0,
  city: 'Taipei',
  expire: '2022-07-31T12:13:46.960Z',
  // startTime: new Date(),
};

const CardWall = ({
  cardList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const cardWallRef = useRef() as RefObject<HTMLDivElement>;
  const [detail, setDetail] = useState({});
  // const [cardList, setCardList] = useState<Task.TaskDetail[]>([]);
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-around p-10 max-w-[1600px]"
    >
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      <Card {...parma} setDetail={setDetail} />
      {cardList?.length > 0
        ? cardList.map((item: Task.TaskDetail) => (
            <Card key={item._id} {...item} setDetail={setDetail} />
          ))
        : Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
      {}
      {showPopupName === 'card' && <CardPopup {...detail} {...parma} />}
      {/* {showPopupName && <TaskAddPop />} */}
    </div>
  );
};

export default CardWall;
