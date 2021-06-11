import {
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Container,
  Text
} from '@chakra-ui/react';

/* <Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg="tomato" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={2} bg="papayawhip" />
  <GridItem colSpan={4} bg="tomato" />
</Grid>; */

const BitcoinPage = () => (
  <Container h="100%" border="1px solid white" maxW="70%">
    <Flex padding="1em" flexDirection="column" alignitems="center">
      <Flex
        padding="1em"
        border="1px solid white"
        borderRadius="8px"
        flexDirection="column"
        alignItems="center"
      >
        <Box>
          <Image
            boxSize="250px"
            borderRadius="8px"
            objectFit="contain"
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
  </Container>
  //Overall Layout: grid?

  //1 Flex containing image and header (coin image and coin name below)

  // <Flex>
  //   <Image></Image>
  //   <Heading></Heading>
  // </Flex>

  //2 Descriptive block to right of (1), text in box?

  // <Box>
  //   <Text></Text>
  // </Box>

  //3 Positive Tweets section. Flex with heading ('positive') and stack of tweets below

  //   <Flex>
  //   <Heading></Heading>
  //   <Stack></Stack>
  // </Flex>

  //4. Negative Tweets section. Same as (3)
);

export default BitcoinPage;
