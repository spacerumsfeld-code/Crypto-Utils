import {
  Flex,
  Heading,
  Box,
  Link,
  useColorModeValue,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import ColorModeChanger from '@/components/ColorModeChanger';
import Nav from '@/components/Nav';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

type HeaderProps = {
  h: string;
};

const Header = ({ h }: HeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'black');
  const router = useRouter();

  return (
    <Flex h={h} bg={bg} justify="right" alignItems="center" pl="1rem">
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
        <>
          <Button onClick={onOpen} variant="ghost">
            <HamburgerIcon></HamburgerIcon>
          </Button>
          <Drawer onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader>
                  Navigation
                  <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                  <Nav onClose={onClose} />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Header;
