import { Flex, Heading, Stack, Image, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

const Header = ({ h }) => {
  <Flex h={h}>
    <Heading>
      <Link as={NextLink} href="/"></Link>
    </Heading>
  </Flex>;
};
