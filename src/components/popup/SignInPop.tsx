import { FC, useMemo, useState } from 'react';

// import { usePopupContext } from '../../hooks/usePopupContext';
import Tab from '../atoms/Tab';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import PopupTemplate from './PopupTemplate';

const tabList = [
  { id: 'signIn', name: '登入' },
  { id: 'signUp', name: '登出' },
];

const SignInPop: FC = () => {
  const [tab, setTab] = useState<string>('signIn');
  const popTitle = useMemo(() => {
    return tabList.find((item) => item.id === tab)?.name as string;
  }, [tab]);
  // const { showPopupName } = usePopupContext();
  return (
    <>
      <PopupTemplate titleName={popTitle}>
        {tab === 'signIn' && <SignIn />}
        {tab === 'signUp' && <SignUp />}
        <Tab
          style="justify-center pt-36"
          tab={tab}
          setTab={setTab}
          tabList={tabList}
        />
      </PopupTemplate>
    </>
  );
};

export default SignInPop;
