import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          {/*
            META TAGS
            then put the website url in some field
          */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Portfolio de Ezequiel Soares, desenvolvedor Front End e entusiasta UX/UI designer."
          />
          <meta name="author" content="Ezequiel Soares" />
          <meta name="robots" content="index" />
          <meta
            property="og:title"
            content="Ezequiel Soares - Front End Developer"
          />
          <meta
            property="og:description"
            content="Portfolio de Ezequiel Soares, desenvolvedor Front End e entusiasta UX/UI designer."
          />
          <meta
            property="og:url"
            content="https://portfolio-mrezequiel.vercel.app/"
          />
          <meta property="og:site_name" content="Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/cover-img.png" />

          <meta
            name="twitter:title"
            content="Ezequiel Soares - Front End Developer"
          />
          <meta
            name="twitter:description"
            content="Portfolio de Ezequiel Soares, desenvolvedor Front End e entusiasta UX/UI designer."
          />
          <meta
            name="twitter:url"
            content="https://portfolio-mrezequiel.vercel.app/"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="/cover-img.png" />
          <meta name="twitter:creator" content="@ezequield3v" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  /* configuration for styled components */
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      }
    } finally {
      sheet.seal()
    }
  }
}
