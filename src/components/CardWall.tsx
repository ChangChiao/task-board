import { useRef, useState, RefObject } from 'react';

import { useRouter } from 'next/router';
import useSWR from 'swr';

import { usePopupContext } from '../hooks/usePopupContext';
import { getAllTask } from '../utils/http';
import { getUserFavorite } from '../utils/http/user';
import Card from './atoms/Card';
import CardSkeleton from './atoms/CardSkeleton';
import CardPopup from './atoms/popup/CardPopup';

const CardWall = () => {
  const router = useRouter();
  const queryTask = () => {
    const { query } = router;
    return getAllTask(query);
  };
  const { data } = useSWR<Task.TaskAPIResponse<Task.TaskDetail>>(
    router.pathname === '/' ? ['/task/all', router.query] : '/task/favorite',
    router.pathname === '/' ? queryTask : getUserFavorite
  );
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

  if (!data) {
    return (
      <div>
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        onScroll={handleScroll}
        ref={cardWallRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-around p-10 mx-auto max-w-[1600px]"
      >
        {data?.data!.map((item: Task.TaskDetail) => (
          <Card key={item._id} {...item} setDetail={setDetail} />
        ))}
        {showPopupName === 'card' && detail && <CardPopup {...detail} />}
      </div>
      {data?.data!.length === 0 && (
        <div className="text-center text-slate-300">暫無資料</div>
      )}
    </div>
  );
};

export default CardWall;
