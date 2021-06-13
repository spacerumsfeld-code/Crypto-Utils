import { SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

import Section from '@/components/Section';

import assets from '@/lib/assets';

export default function Home() {
  return (
    <>
      <Head>
        <title>To The Moon</title>
        <meta name="Home Page" content="CryptoDigest Home Page" />
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
