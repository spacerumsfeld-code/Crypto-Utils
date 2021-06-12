import {
  VStack,
  StackDivider,
  Text,
  Heading,
  useColorModeValue
} from '@chakra-ui/react';

type Tweet = {
  text: string;
};

type NegativeTweetsProps = {
  negative: Tweet[];
};

const NegativeTweets = ({ negative }: NegativeTweetsProps) => {
  const bg = useColorModeValue('gray.700', 'whiteAlpha.900');

  return (
    <VStack
      borderRadius="8px"
      shadow="xl"
      mY={100}
      border="1px solid white"
      divider={<StackDivider borderColor={bg} />}
      spacing={2}
      align="stretch"
    >
      <Heading textAlign="center" fontSize="sm">
        NegativeTweets
      </Heading>
      {negative.map((tweet) => (
        <Text key={tweet.text}>{tweet.text}</Text>
      ))}
    </VStack>
  );
};

export default NegativeTweets;
