import { useCallback, useEffect, useState } from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import AddButton from '../components/atoms/button/AddButton';
import TaskAddPop from '../components/atoms/popup/TaskAddPop';
import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { usePopupContext } from '../hooks/usePopupContext';
import { genQueryStr } from '../utils';
import { getAllTask } from '../utils/http';

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context.query', context.query);
  const queryObj = context.query ?? {};
  const result = await getAllTask(queryObj);
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
  const router = useRouter();

  const refreshData = (query: string = '') => {
    console.log('router', router);
    router.replace(router.pathname + query);
  };

  const queryCardList = useCallback(
    async (keyword?) => {
      console.log('sortType', sortType);

      const sortBy = sortType.split('_')[0]!;
      const sortOrder = sortType.split('_')[1]!;
      const param = {
        sortBy,
        sortOrder,
        city,
        keyword: keyword ?? searchText,
      };
      const query = `?${genQueryStr(param)}`;
      refreshData(query);
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
      {showPopupName === 'taskAdd' && <TaskAddPop getList={refreshData} />}
    </>
  );
};
export default Index;
