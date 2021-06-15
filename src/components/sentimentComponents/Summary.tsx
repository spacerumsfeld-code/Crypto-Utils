import { Box, Text } from '@chakra-ui/react';

import utils from '@/lib/sentiment-utils';

type SummaryProps = {
  asset: string;
  positiveCount: number;
  negativeCount: number;
};

const Summary = ({ asset, positiveCount, negativeCount }: SummaryProps) => {
  const [sentiment, emotion, color] = utils.setSentiment(
    positiveCount,
    negativeCount
  );
  return (
    <Box fontSize={['md', 'lg']} mb={4} textAlign="center">
      <Text d="inline">{`Currently, overall market sentiment toward ${asset} is`}</Text>
      <Text d="inline" color={color}>
        {` ${sentiment}`}
      </Text>
      <Text d="inline block">{` with ${positiveCount} positive tweets and ${negativeCount} negative tweets from a representative sample. The market is in a state of`}</Text>
      <Text color={color}>{` ${emotion}.`}</Text>
    </Box>
  );
};

export default Summary;
