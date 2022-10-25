import { useRef, useState, RefObject, useEffect } from 'react';

import useSWR from 'swr';

import { usePopupContext } from '../hooks/usePopupContext';
import { getAllTask } from '../utils/http';
import Card from './atoms/Card';
import CardSkeleton from './atoms/CardSkeleton';
import CardPopup from './atoms/popup/CardPopup';

type CardWallProps = {
  cardList: Task.TaskDetail[];
};

const CardWall = ({ cardList }: CardWallProps) => {
  const { data } = useSWR('/task/all', getAllTask);
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

  useEffect(() => {
    console.log('data', data);
  }, [data]);
  return (
    <div>
      <p className="text-white">111{JSON.stringify(data)}</p>
      <div
        onScroll={handleScroll}
        ref={cardWallRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-around p-10 mx-auto max-w-[1600px]"
      >
        {cardList?.length > 0 &&
          cardList.map((item: Task.TaskDetail) => (
            <Card key={item._id} {...item} setDetail={setDetail} />
          ))}
        {!data &&
          Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        {showPopupName === 'card' && detail && <CardPopup {...detail} />}
      </div>
      {data && cardList.length === 0 && (
        <div className="text-center text-slate-300">暫無資料</div>
      )}
    </div>
  );
};

export default CardWall;
