import { Box, Link, Heading, Image, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

type SectionProps = {
  title: string;
  href: string;
  image: string;
  onClick?: () => void;
};

const Section = ({ title, href, image, onClick }: SectionProps) => (
  <NextLink href={href}>
    <Link onClick={onClick}>
      <Flex
        h="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        padding="1em"
        borderRadius="8px"
        cursor="pointer"
        shadow="xl"
        // bgImage="/card-background.svg"
        // bgPosition="center"
        // bgSize="cover"
      >
        <Box flex={1}>
          <Image objectFit="contain" src={image} alt={title} />
        </Box>
        <Heading text-align="center">{title}</Heading>
      </Flex>
    </Link>
  </NextLink>
);

export default Section;
