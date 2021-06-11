import { Flex, Heading, Stack, Image, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

const Header = ({ h }) => {
  <Flex>
    <Heading>
      <Link as={NextLink} href="/"></Link>
    </Heading>
  </Flex>;
};
