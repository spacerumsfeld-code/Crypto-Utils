import { Box, Link, Heading, Image, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Section = ({ title, href, image }) => (
  <Link as={NextLink} href={href}>
    <Flex>
      <Box flex={1}>
        <Image objectFit="contain" src={image} alt={title} />
      </Box>
      <Heading text-align="center">{title}</Heading>
    </Flex>
  </Link>
);

export default Section;
