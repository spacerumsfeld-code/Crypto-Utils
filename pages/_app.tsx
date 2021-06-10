/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
