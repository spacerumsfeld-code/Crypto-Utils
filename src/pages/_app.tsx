import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import Layout from '@/components/Layout';
import theme from '@/styles/theme';
import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
