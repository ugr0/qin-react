import "src/styles/globals.css";
import Head from "next/head";
import { AppLayout } from "src/layouts/AppLayout";
import { SWRConfig } from "swr";
import { fetcher } from "src/utils/fetcher";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SWRConfig>
    </>
  );
};

export default MyApp;
