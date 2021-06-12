import {
  VStack,
  StackDivider,
  Text,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

const PositiveTweets = () => {
  const bg = useColorModeValue('gray.700', 'whiteAlpha.900');

  return (
    <VStack
      mt={4}
      border="1px solid white"
      divider={<StackDivider borderColor={bg} />}
      spacing={4}
      align="stretch"
    >
      <Heading textAlign="center" fontSize="sm">
        Positive Tweets
      </Heading>
      <Text>Tweet 1 bro!</Text>
      <Text>Tweet 1 bro!</Text>
      <Text>Tweet 1 bro!</Text>
      <Text>Tweet 1 bro!</Text>
    </VStack>
  );
};

export default PositiveTweets;
