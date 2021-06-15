import { Box, Text } from '@chakra-ui/react';

import setSentiment from '@/lib/sentiment-utils';

type SummaryProps = {
  asset: string;
  positiveCount: number;
  negativeCount: number;
};

const Summary = ({ asset, positiveCount, negativeCount }: SummaryProps) => {
  const [sentiment, emotion] = setSentiment(positiveCount, negativeCount);
  return (
    <Box mb={4} textAlign="center">
      <Text fontSize={['md', 'lg']}>
        {`Currently, overall market sentiment toward ${asset} is ${sentiment}, with ${positiveCount} positive tweets and ${negativeCount} negative tweets from a representative sample. The market is in a state of ${emotion}!`}
      </Text>
    </Box>
  );
};

export default Summary;
