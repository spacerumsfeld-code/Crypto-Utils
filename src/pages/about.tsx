import { Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>To The Moon</title>
        <meta name="About Page" content="About To The Moon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading>About Page!</Heading>
      </Flex>
    </>
  );
}
