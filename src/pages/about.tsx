import {
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Container,
  Text
} from '@chakra-ui/react';

// <Text fontSize={['0.9em', '1.3em']}>

const AboutPage = () => (
  <Container>
    <Flex
      flexDirection="column"
      pt="1em"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="6vw">Crypto Digest</Heading>
      <Text>Your favorite digital cryptocurrency sentiment app!</Text>
    </Flex>
  </Container>
);

export default AboutPage;
