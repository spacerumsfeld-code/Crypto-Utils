import { Flex, Heading, Stack, Image, Link } from '@chakra-ui/react';

import ColorModeChanger from './ColorModeChanger';

import NextLink from 'next/link';

const Header = ({ h }) => {
  //router

  return (
    <Flex h={h}>
      <Flex>
        <Heading>
          <Link as={NextLink} href="/">
            Crypto Digest
          </Link>
        </Heading>
        <ColorModeChanger />
      </Flex>
    </Flex>
  );
};

export default Header;
