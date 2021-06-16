import { Container, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="About Page" content="About Crypto-Utils" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading>About Crypto-Utils</Heading>
          <Text>
            Welcome to Crypt-Utils, an application with all the tools you need!
          </Text>
        </Flex>
      </Container>
    </>
  );
}
