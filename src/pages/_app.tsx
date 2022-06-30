import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Fonts from 'fonts';
import theme from 'theme'
import { LenguageProvider } from 'hooks/useTranslation';
import { SignupProvider } from 'hooks/useSignup';
import { SigninProvider } from 'hooks/useSignin';

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
            <SigninProvider>
                <SignupProvider>
                    <Fonts />
                    <Component {...pageProps} />
                </SignupProvider>
            </SigninProvider>
          </LenguageProvider>
      </ChakraProvider>
  );
}

export default MyApp
