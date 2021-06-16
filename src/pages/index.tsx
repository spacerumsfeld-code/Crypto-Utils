import { SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

import Section from '@/components/Section';

import assets from '@/lib/assets';

//future: when nextAuth is incorporated, create additional filter here to filter different utilies based on if there is a user or not. This will constrain an unregistered visitor to certain utilies displaying in the navbar. Once they log in and go to navigation, they will see the full list of utilies

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto-Utils</title>
        <meta name="Home Page" content="Crypto-Utils" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid w="100%" gap={8} minChildWidth="20em" gridAutoRows="1fr">
        {assets
          .filter(({ href }) => href !== '/')
          .map((asset) => (
            <Section key={asset.title} {...asset} />
          ))}
      </SimpleGrid>
    </>
  );
}
