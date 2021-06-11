import { Box, Link, Heading, Image, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Section = ({ title, href, image }) => (
  <Link as={NextLink} href={href}>
    <Flex
      h="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding="1em"
      borderRadius="8px"
      cursor="pointer"
      shadow="xl"
    >
      <Box flex={1}>
        <Image objectFit="contain" src={image} alt={title} />
      </Box>
      <Heading text-align="center">{title}</Heading>
    </Flex>
  </Link>
);

export default Section;
