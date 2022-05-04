import Layout from '../dist/components/Layout';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { PortfolioContextProvider } from '../dist/context/portfolioContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IamBram Front End Development & Web Design</title>
        <meta name="description" content="Junior Developer for hire, Front End Development with React/Next, Javascript, Sass, CSS, HTML, JQuery."/>
        <meta name='author' content='Bram peter van Zalk'/>
        <meta name="keywords" content='Front End Development, React/Next, Javascript, Sass, CSS, HTML, JQuery, Developer for hire' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='robots' content='all'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PortfolioContextProvider>
    </>
  );
};

export default MyApp;
