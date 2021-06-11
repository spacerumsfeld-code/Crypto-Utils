import { Box, Link, Heading, Image, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

const Section = ({ title, href, image }) => {
  <Link as={NextLink} href={href}>
    <Flex>
      <Box>
        <Image></Image>
      </Box>
      <Heading></Heading>
    </Flex>
  </Link>;
};

export default Section;
