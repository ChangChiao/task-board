import { GetServerSideProps } from 'next';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Router } from 'next/router';
import NProgress from 'nprogress'; // nprogress module
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';

import { MenuContextProvider } from '@/hooks/useMenuContext';

import 'nprogress/nprogress.css'; // styles of nprogress
import { LoadingContextProvider } from '../hooks/useLoadingContext';
import { PopupContextProvider } from '../hooks/usePopupContext';
import Layout from '../layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/global.css';

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { token } = query;
  console.log('req', req);
  console.log('token', token);
  const result = {};
  return {
    props: {
      user: result,
    },
  };
};

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// @ts-ignore
const MyApp = ({ Component, pageProps, session }: AppProps) => (
  <SessionProvider session={session}>
    <RecoilRoot>
      <LoadingContextProvider>
        <PopupContextProvider>
          <MenuContextProvider>
            <Layout>
              <Head>
                <title>任務派發</title>
                <link rel="shortcut icon" href="/tools_icon-icons.com.ico" />
              </Head>
              <Component {...pageProps} />
              <ToastContainer />
            </Layout>
          </MenuContextProvider>
        </PopupContextProvider>
      </LoadingContextProvider>
    </RecoilRoot>
  </SessionProvider>
);

export default MyApp;
