import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import main from '../styles/theme/main'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={main}>
      <Head>
        <title>Ezequiel Soares - Front End, UX/UI</title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
