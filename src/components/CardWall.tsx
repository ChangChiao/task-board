import { useRef, useState, RefObject } from 'react';

import { usePopupContext } from '../hooks/usePopupContext';
import Card from './atoms/Card';
import CardSkeleton from './atoms/CardSkeleton';
import CardPopup from './atoms/popup/CardPopup';

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log('66666666666666666');

//   const result = await getAllTask({});
//   let cardList: Task.TaskDetail[] | [] = [];
//   if (result.status === 'success') {
//     cardList = result.data ?? [];
//     console.log('cardList===', cardList);
//   }
//   return {
//     props: {
//       cardList,
//     },
//   };
// };

// const parma = {
//   _id: '13232323231233',
//   title: 'heorkpeook reorepowkr',
//   description: 'reowprkoperopwerfewrwe[rwe[]rl',
//   cover: '/assets/images/image-equilibrium.jpg',
//   author: {
//     avatar:
//       'https://lh3.googleusercontent.com/a-/AFdZucoWzuj6qntm21vK6-E9cNgzLWXtnIIUrlP7HpLOaA=s96-c',
//     isVip: false,
//     name: 'Chiao Chang',
//     _id: '62efd4c4d2c16f425e2c7469',
//   },
//   reward: 1000,
//   status: 0,
//   city: 'Taipei',
//   expire: '2022-07-31T12:13:46.960Z',
//   // startTime: new Date(),
// };

type CardWallProps = {
  cardList: Task.TaskDetail[];
};

const CardWall = ({ cardList }: CardWallProps) => {
  const cardWallRef = useRef() as RefObject<HTMLDivElement>;
  const [detail, setDetail] = useState<Task.TaskDetail | undefined>(undefined);
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-around p-10 mx-auto max-w-[1600px]"
    >
      {/* <Card {...parma} setDetail={setDetail} /> */}
      {cardList?.length > 0
        ? cardList.map((item: Task.TaskDetail) => (
            <Card key={item._id} {...item} setDetail={setDetail} />
          ))
        : Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
      {showPopupName === 'card' && detail && <CardPopup {...detail} />}
      {/* {showPopupName && <TaskAddPop />} */}
    </div>
  );
};

export default CardWall;
