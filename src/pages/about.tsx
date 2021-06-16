import {
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="About Page" content="About Crypto-Utils" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        h="100%"
        maxW="70%"
        bg={bg}
        shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading>Welcome to Crypto-Utils</Heading>
          <Text>A Digital Cryptocurrency Utility Platform</Text>
          <Text my={4}>
            Crypto-Utils is designed to be your one-stop shop for a variety of
            utilities to get the information you need!
          </Text>
          <Text>
            Crypto-Utils is your one-stop shop for a variety of utilities
            pertaining to digital cryptocurrencies.{' '}
          </Text>
          <Text></Text>
        </Flex>
      </Container>
    </>
  );
}
