import { useCallback, useEffect, useState } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { getAllTask } from '../utils/http';

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

const Index = ({
  cardList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');

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
    </>
  );
};
export default Index;
