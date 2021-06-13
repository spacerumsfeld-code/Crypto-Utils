import {
  Flex,
  Heading,
  Box,
  Link,
  useColorModeValue,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
    <Flex h={h} bg={bg} justify="space-between" alignItems="center" pl="1rem">
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
      {router.route !== '/' && (
        <Button variant="ghost">
          <HamburgerIcon></HamburgerIcon>
        </Button>
      )}
    </Flex>
  );
};

export default Header;
