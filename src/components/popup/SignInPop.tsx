import { useMemo, useState } from 'react';

// import { usePopupContext } from '../../hooks/usePopupContext';
import Tab from '../atoms/Tab';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import PopupTemplate from './PopupTemplate';

const tabList = [
  { id: 'signIn', name: '登入' },
  { id: 'signUp', name: '註冊' },
];

const SignInPop = () => {
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
        <div className="absolute left-0 right-0 bottom-5">
          <Tab
            style="justify-center"
            tab={tab}
            setTab={setTab}
            tabList={tabList}
          />
        </div>
      </PopupTemplate>
    </>
  );
};

export default SignInPop;
