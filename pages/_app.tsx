import Layout from '../dist/components/Layout'
import type { AppProps } from 'next/app'
import { PortfolioContextProvider } from '../dist/context/portfolioContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PortfolioContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PortfolioContextProvider>
  )
}

export default MyApp
