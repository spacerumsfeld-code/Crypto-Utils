import { Container, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';

import Section from '@/components/Section';

import assets from '@/lib/assets';

export default function Home() {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <>
      <Head>
        <title>Crypto-Utils</title>
        <meta name="Home Page" content="Crypto-Utils" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        h="100%"
        p="1rem"
        borderRadius="8px"
        maxW={['80%', '70%']}
        bg={bg}
        shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      >
        <SimpleGrid w="100%" gap={8} minChildWidth="10em" gridAutoRows="1fr">
          {assets
            .filter(({ href }) => href !== '/')
            .map((asset) => (
              <Section key={asset.title} {...asset} />
            ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
