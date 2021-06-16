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
        <Flex
          textAlign="center"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading fontSize="4vw">Welcome to Crypto-Utils</Heading>
          <Text fontSize={['0.9em', '1.3em']}>
            A Digital Cryptocurrency Utility Platform
          </Text>
          <Text my={4}>
            Crypto-Utils is designed to be your one-stop shop for a variety of
            digital cryptocurrency utilities. You shouldn&apos;t have to scour
            the web for your favorite tools, and now you don&apos;t have to!
          </Text>
          <Text>
            Crypto-Utils is your one-stop shop for a variety of utilities
            pertaining to digital cryptocurrencies.
          </Text>
          <Text></Text>
        </Flex>
      </Container>
    </>
  );
}
