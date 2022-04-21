import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import GlobalStyles from '../styles/GlobalStyles'
import main from '../styles/theme/main'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={main}>
      <Head>
        <title>Ezequiel Soares - Front End Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
