import Layout from '../dist/components/Layout'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { PortfolioContextProvider } from '../dist/context/portfolioContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IamBram Front End Development & Web Design</title>
        <meta name="Description" content="Junior Developer for hire, Front End Development with React, Javascript, SCSS, CSS3."/>
        <meta name='Author' content='Bram peter van Zalk'/>
        <meta name='robots' content='all'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PortfolioContextProvider>
    </>
  )
}

export default MyApp
