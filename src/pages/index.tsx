import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { userState } from '../store/user';
import { getAllTask } from '../utils/http';
import { getUser } from '../utils/http/user';

const Index = () => {
  const [, setUser] = useRecoilState(userState);
  const [searchText, setSearchText] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [sortType, setSortType] = useState<string>('');
  const router = useRouter();

  const { token } = router.query;

  const queryUser = async () => {
    const result = await getUser();
    const { status, data } = result;
    if (status === 'success') {
      setUser(data);
    }
  };

  const queryCardList = useCallback(async () => {
    const param = {
      order: sortType,
      sortby: 'pay',
      city,
      keywprd: searchText,
    };
    await getAllTask(param);
  }, [searchText, city, sortType]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token as string);
    }
    queryUser();
  }, []);
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
