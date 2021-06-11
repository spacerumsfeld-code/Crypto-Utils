import {
  Flex,
  Heading,
  Stack,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

import ColorModeChanger from './ColorModeChanger';

import NextLink from 'next/link';

const Header = ({ h }) => {
  const bg = useColorModeValue('white', 'black');
  //router

  return (
    <Flex h={h} bg={bg} justify="right" alignItems="center" pl="1em">
      <Flex align="center">
        <Heading bgClip="text" bgGradient="linear(to-t, teal.200, blue.500)">
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
