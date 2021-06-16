import {
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
  const bg = useColorModeValue('white', 'black');
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="About Page" content="About Crypto-Utils" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxW="70%"
        bg={bg}
        shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Heading>Welcome to Crypto-Utils</Heading>
          <Text>Your one-stop shop for digital cryptocurrency utilities</Text>
          <Text my={4}>
            Welcome to Crypt-Utils, an application with all the tools you need!
          </Text>
          <Text></Text>
          <Text></Text>
        </Flex>
      </Container>
    </>
  );
}
