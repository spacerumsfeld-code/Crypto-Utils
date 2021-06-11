import { Flex, Heading, Stack, Image, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

const Header = ({ h }) => {

//router

  return (

  )
  <Flex h={h}>
    <Heading>
      <Link as={NextLink} href="/">
        Crypto Digest
      </Link>
    </Heading>
  </Flex>;
};

export default Header;
