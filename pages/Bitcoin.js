import { SimpleGrid, Stack, Flex, Heading } from '@chakra-ui/react';

const BitcoinPage = () => (
  //Overall Layout: grid?

  //1 Flex containing image and header (coin image and coin name below)

  //2 Descriptive block to right of (1), text in box?

  //3 Positive Tweets section. Flex with heading ('positive') and stack of tweets below

  //4. Negative Tweets section. Same as (3)
  <SimpleGrid>
    <Flex>
      <Heading></Heading>
      <Stack></Stack>
    </Flex>

    <Stack>Negative</Stack>
  </SimpleGrid>
);

export default BitcoinPage;
