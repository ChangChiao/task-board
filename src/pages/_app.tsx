import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>任務派發</title>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </>
);

export default MyApp;
