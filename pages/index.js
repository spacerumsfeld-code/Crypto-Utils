/* eslint-disable no-undef */
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    // eslint-disable-next-line no-undef
    <Box color="brand.text">
      <Head>
        <title>To The Moon</title>
        <meta name="Home Page" content="CryptoDigest Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Text>Hello World</Text>
    </Box>
  );
}
