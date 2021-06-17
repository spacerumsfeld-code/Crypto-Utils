import {
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';
import Head from 'next/head';
import AboutFeature from '@/components/AboutFeature';

import { FcAreaChart, FcCurrencyExchange } from 'react-icons/fc';
import { RiEmotionHappyFill } from 'react-icons/ri';

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
            A Minimalist Digital Cryptocurrency Utility Platform
          </Text>
          <Text my={4}>
            Crypto-Utils is designed to be your one-stop shop for a variety of
            digital cryptocurrency utilities. You shouldn&apos;t have to scour
            the web for your favorite tools, and now you don&apos;t have to!
          </Text>
          <SimpleGrid space={10} columns={[1, 3]}>
            <AboutFeature
              icon={<Icon as={FcAreaChart} w={10} h={10} />}
              title={'Live Price Data'}
              text={'Get live price data and stuff'}
            />
            <AboutFeature
              icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
              title={'Cryptocurrency Converter'}
              text={
                'Instantly see the value of your cryptocurrencies in fiat terms or in terms of  another cryptocurrency'
              }
            />
            <AboutFeature
              icon={
                <Icon
                  as={RiEmotionHappyFill}
                  w={10}
                  h={10}
                  color="yellow.500"
                />
              }
              title={'Sentiment Analyzer'}
              text={'Get the latest market sentiment'}
            />
          </SimpleGrid>
        </Flex>
      </Container>
    </>
  );
}
