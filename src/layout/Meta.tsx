import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { AppConfig } from '@/utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="tools_icon-icons.com"
          href={`/tools_icon-icons.com.ico`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href={`/tools_icon-icons.com.ico`}
          key="icon64"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/favicon-16x16.png`}
          key="icon16"
        /> */}
        <link rel="icon" href={`/tools_icon-icons.com.ico`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
