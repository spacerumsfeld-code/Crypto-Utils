import { SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head';

import Section from '../components/AssetItem';

import assets from '../lib/assets';

export default function Home() {
  return (
    <SimpleGrid w="100%" gap={8} mindWidthChild="21rem" gridAutoRows="1fr">
      <Head>
        <title>To The Moon</title>
        <meta name="Home Page" content="CryptoDigest Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {assets
        .filter(({ link }) => link !== '/')
        .map((asset) => (
          <Section key={asset.title} {...asset} />
        ))}
    </SimpleGrid>
  );
}
