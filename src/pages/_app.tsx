import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import Head from 'next/head'
import Router from 'next/router'

import { ThemeProvider } from 'styled-components'

import Footer from '../components/Footer'
import Header from '../components/Header'
import GlobalStyles from '../styles/GlobalStyles'
import main from '../styles/theme/main'

import NProgress from 'nprogress'
import 'tilt.js'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
      <Footer />
      <GlobalStyles />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
