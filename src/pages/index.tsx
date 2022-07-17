// eslint-disable-next-line import/no-cycle

import CardWall from '../components/CardWall';
import Pay from '../components/Pay';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// import {
//   usePopupContext,
//   PopupContextProvider,
// } from '../hooks/usePopupContext';

const Index = () => {
  return (
    // <PopupContextProvider>
    <>
      <SignUp />
      <SignIn />
      <Pay />
      <CardWall />
    </>
    // </PopupContextProvider>
  );
};
export default Index;
