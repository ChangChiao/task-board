import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>任務派發</title>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  </>
);

export default MyApp;
