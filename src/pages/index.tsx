import { useCallback, useEffect, useState } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import AddButton from '../components/atoms/button/AddButton';
import TaskAddPop from '../components/atoms/popup/TaskAddPop';
import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { usePopupContext } from '../hooks/usePopupContext';
import { getAllTask } from '../utils/http';

const queryData = async () => {
  const data = await getAllTask({});
  return data;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await queryData();
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

const Index = ({
  cardList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const { showPopupName } = usePopupContext();
  const queryCardList = useCallback(
    async (keyword?) => {
      const param = {
        order: sortType,
        sortby: 'reward',
        city,
        keyword: keyword ?? searchText,
      };
      await getAllTask(param);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [city, sortType]
  );

  useEffect(() => {
    queryCardList();
  }, [city, sortType, queryCardList]);
  return (
    <>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        city={city}
        setCity={setCity}
        sortType={sortType}
        setSortType={setSortType}
        queryCardList={queryCardList}
      />
      <CardWall cardList={cardList} />
      <AddButton />
      {showPopupName === 'taskAdd' && <TaskAddPop getList={queryData} />}
    </>
  );
};
export default Index;
