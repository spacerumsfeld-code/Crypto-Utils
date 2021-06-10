/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraProvider } from '@chakra-ui/react';
// import { AppProps } from 'next/app';
import theme from '../styles/theme';
import '../styles/globals.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
