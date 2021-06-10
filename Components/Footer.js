import { Link, Icon, Flex, Text, Stack } from '@chakra-ui/react';

const Footer = ({ h }) => {
  return (
    <Flex h={h} justifyContent="center" alignItems="center">
      <Text fontSize="sm">
        Made by{' '}
        <Link display="inline=block" href="https://www.google.com">
          <Text fontSize="sm">Nick Papadakis</Text>
        </Link>
      </Text>
      <Stack></Stack>
    </Flex>
  );
};

export default Footer;
