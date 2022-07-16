import { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import Layout from '../layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>任務派發</title>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer />
    </RecoilRoot>
  </Layout>
);

export default MyApp;
