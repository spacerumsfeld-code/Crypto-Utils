import {
  Box,
  Link,
  Heading,
  Image,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';

type SectionProps = {
  title: string;
  href: string;
  image: string;
  onClick?: () => void;
};

const Section = ({ title, href, image, onClick }: SectionProps) => {
  const bg = useColorModeValue('white', 'gray.600');

  return (
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
          bg={bg}
          shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
        >
          <Box flex={1}>
            <Image objectFit="contain" src={image} alt={title} />
          </Box>
          <Heading text-align="center">{title}</Heading>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default Section;
