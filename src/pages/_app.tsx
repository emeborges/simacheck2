import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Fonts from 'fonts';
import theme from 'theme'
import { LenguageProvider } from 'hooks/useTranslation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Netfly Frontend Boilerplate</title>
        <link rel="shortcut icon" href="/img/chakra-logo.png" />
        <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Netfly Frontend Boilerplate" />
      </Head>
      <LenguageProvider>


      <Fonts />

      <Component {...pageProps} />
      </LenguageProvider>
    </ChakraProvider>
  )
}

export default MyApp
