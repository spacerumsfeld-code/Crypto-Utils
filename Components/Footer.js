import { Link, Icon, Flex, Text, Stack } from '@chakra-ui/react';

const Footer = ({ h }) => {
  return (
    <Flex h={h} justifyContent="center" alignItems="center">
      <Text>
        Made by <Link href="https://www.google.com">Nick Papadakis</Link>
      </Text>
      <Stack></Stack>
    </Flex>
  );
};

export default Footer;
