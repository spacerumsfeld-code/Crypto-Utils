import {
  SimpleGrid,
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Container,
  Text
} from '@chakra-ui/react';

const BitcoinPage = () => (
  // <Container
  //   h="100%"
  //   w={['50%', '70%', '80%']}
  //   border="1px solid white"
  //   maxW="70%"
  //   centerContent
  //   //Overall wrapper for page. Intention: limit maxWidth and center everything
  // >
  <Flex
    flexDirection="column"
    h="100%"
    alignItems="center"
    justifyItems="center"
    padding="1em"
    //overall container for content in order to have flex direction=column (flow downward)
  >
    <Flex
      flexDirection={['column', 'row', 'row']}
      alignItems="center"
      justifyContent="center"
      //Wrapper for Top Panel: flex-direction row, asset image+heading flex and Description
    >
      <Flex
        padding="1em"
        border="1px solid white"
        borderRadius="8px"
        flexDirection="column"
        alignItems="center"
        //Flex for image + header so that they stack vertically
      >
        <Box>
          <Image
            maxBlockSize={['200px', '300px', '400px']}
            borderRadius="8px"
            // objectFit="contain"
            src={'/section-image.png'}
            alt="asset"
          />
        </Box>
        <Heading>Bitcoin</Heading>
      </Flex>
      <Container border="1px solid white" centerContent>
        <Text fontSize="lg" border="1px solid white" padding="1em">
          Hello World. Welcome to the exciting world of Bitcoin. Introduced in
          2009, Bitcoin is a digital cryptocurrency that uses stuff to do cool
          things.
        </Text>
      </Container>
    </Flex>
    <Box
      border="1px solid white"
      mt={3}
      textAlign="center"
      //Box for sentiment summary section: Heading and summarizing paragraph
    >
      <Heading>Sentiment Summary</Heading>
      <Text fontSize="xl">
        This paragraph will contain a brief sentiment of the sentiment data that
        came in from props. The plan is to have this be a template literal that
        drops in values based on the data!
      </Text>
    </Box>
  </Flex>
  // </Container>

  //   <Flex>
  //   <Heading></Heading>
  //   <Stack></Stack>
  // </Flex>

  //4. Negative Tweets section. Same as (3)
);

export default BitcoinPage;
