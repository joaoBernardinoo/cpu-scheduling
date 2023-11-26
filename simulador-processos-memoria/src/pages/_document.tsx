import type { DocumentContext } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => properties =>
            sheet.collectStyles(<App {...properties} />)
        })

      const initialProperties = await Document.getInitialProps(context)
      return {
        ...initialProperties,
        styles: [initialProperties.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return(
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

