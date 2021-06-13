import { Flex, Heading, Box, Link, useColorModeValue } from '@chakra-ui/react';

import ColorModeChanger from './ColorModeChanger';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

type HeaderProps = {
  h: string;
};

const Header = ({ h }: HeaderProps) => {
  const bg = useColorModeValue('white', 'black');
  const router = useRouter();

  return (
    <Flex h={h} bg={bg} justify="right" alignItems="center" pl="1em">
      <Flex align="center">
        <Heading bgClip="text" bgGradient="linear(to-t, teal.200, blue.500)">
          <Link as={NextLink} href="/">
            Crypto Digest
          </Link>
        </Heading>
        <Box flex={1} ml={1}>
          <ColorModeChanger />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
