import { useCallback, useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import AddButton from '../components/atoms/button/AddButton';
import TaskAddPop from '../components/atoms/popup/TaskAddPop';
import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { usePopupContext } from '../hooks/usePopupContext';
import { genQueryStr } from '../utils';
import { getAllTask } from '../utils/http';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryObj = context.query ?? {};
  const result = await getAllTask(queryObj);
  // let cardList: Task.TaskDetail[] | [] = [];
  console.log('result---', result);
  return {
    props: {
      fallbackData: result,
    },
  };
};

const Index = () => {
  const router = useRouter();
  // const queryTask = () => {
  //   const { query } = router;
  //   return getAllTask(query);
  // };
  // const { data } = useSWR(['/task/all', router.query], queryTask, {
  //   fallbackData,
  // });
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const { showPopupName } = usePopupContext();

  const refreshData = (query: string = '') => {
    router.replace(router.pathname + query);
  };

  const queryCardList = useCallback(
    async (keyword?) => {
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
      <CardWall />
      <AddButton />
      {showPopupName === 'taskAdd' && <TaskAddPop getList={refreshData} />}
    </>
  );
};
export default Index;
