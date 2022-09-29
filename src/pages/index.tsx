import { useCallback, useEffect, useState } from 'react';

import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { getAllTask } from '../utils/http';

const Index = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');

  const queryCardList = useCallback(async () => {
    const param = {
      order: sortType,
      sortby: 'reward',
      city,
      keyword: searchText,
    };
    await getAllTask(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, sortType]);

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
    </>
  );
};
export default Index;
