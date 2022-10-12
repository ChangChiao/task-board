import { useEffect, useState } from 'react';

import CardWall from '../components/CardWall';
import { getUserFavorite } from '../utils/http/user';

const Favorite = () => {
  const [list, setList] = useState<Task.TaskDetail[]>([]);
  const queryCardList = async () => {
    const res = await getUserFavorite();
    if (res.data) {
      setList(res.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  useEffect(() => {
    queryCardList();
  }, []);

  return (
    <div>
      <CardWall cardList={list} />
    </div>
  );
};

export default Favorite;
