import {
  VStack,
  StackDivider,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

type Tweet = {
  text: string;
  sentiment: string;
};

type PositiveTweetsProps = {
  positive: Tweet[];
};

const PositiveTweets = ({ positive }: PositiveTweetsProps) => {
  const bg = useColorModeValue('gray.700', 'whiteAlpha.900');

  return (
    <VStack
      borderRadius="8px"
      shadow="xl"
      divider={<StackDivider borderColor={bg} />}
      spacing={2}
      align="stretch"
    >
      {positive.map((tweet) => (
        <Text fontSize={['md', 'lg']} key={tweet.text}>
          {tweet.text}
        </Text>
      ))}
    </VStack>
  );
};

export default PositiveTweets;
