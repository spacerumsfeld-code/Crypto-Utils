import { SimpleGrid } from '@chakra-ui/react';

/* eslint-disable no-undef */
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <SimpleGrid>
      <Head>
        <title>To The Moon</title>
        <meta name="Home Page" content="CryptoDigest Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </SimpleGrid>
  );
}
