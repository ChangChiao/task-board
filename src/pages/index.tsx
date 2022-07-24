import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import CardWall from '../components/CardWall';
import SearchBar from '../components/SearchBar';
import { userState } from '../store/user';
import { getUser } from '../utils/http/user';

const Index = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const { token } = router.query;

  const queryUser = async () => {
    const result = await getUser();
    const { status, data } = result;
    if (status === 'success') {
      setUser(data);
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token as string);
    }
    queryUser();
  }, []);
  return (
    <>
      <SearchBar />
      <CardWall />
    </>
  );
};
export default Index;
