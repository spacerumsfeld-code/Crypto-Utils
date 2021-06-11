import { Box, Link, Heading, Image, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Section = ({ title, href, image }) => (
  <Link as={NextLink} href={href}>
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding="1em"
      border="1px solid white"
      borderRadius="8px"
      cursor="pointer"
      shadow="xl"
    >
      <Box flex={1}>
        <Image objectFit="contain" src={image} alt={title} />
      </Box>
      <Heading
        bgClip="text"
        bgGradient="linear(to-t, green.200, pink.500)"
        text-align="center"
      >
        {title}
      </Heading>
    </Flex>
  </Link>
);

export default Section;
