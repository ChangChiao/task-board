import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { PopupContextProvider } from '../hooks/usePopupContext';
import Layout from '../layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <PopupContextProvider>
    <RecoilRoot>
      <Layout>
        <Head>
          <title>任務派發</title>
          <link rel="shortcut icon" href="/tools_icon-icons.com.ico" />
        </Head>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </RecoilRoot>
  </PopupContextProvider>
);

export default MyApp;
