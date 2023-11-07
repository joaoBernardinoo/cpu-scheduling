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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

