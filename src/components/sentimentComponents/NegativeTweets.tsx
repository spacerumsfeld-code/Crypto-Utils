import {
  VStack,
  StackDivider,
  Text,
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
      border="1px solid white"
      divider={<StackDivider borderColor={bg} />}
      spacing={2}
      align="stretch"
    >
      {negative.map((tweet) => (
        <Text key={tweet.text}>{tweet.text}</Text>
      ))}
    </VStack>
  );
};

export default NegativeTweets;
