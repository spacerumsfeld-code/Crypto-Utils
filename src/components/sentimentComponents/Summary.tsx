import { Box, Text } from '@chakra-ui/react';

//add positive and negative to props, bring in utility function that assigns sentiment descriptors based on ratios in those props, render from the result of the util with template literals

type SummaryProps = {
  asset: string;
  positiveCount: number;
  negativeCount: number;
};

const;

const Summary = ({ asset, positiveCount, negativeCount }: SummaryProps) => (
  <Box mb={4} textAlign="center">
    <Text fontSize={['md', 'lg']}>
      Sentiment Summary! This is a placeholder paragraph to indicate an example
      size of a sentiment summary paragraph. Currently, 100 percent of tweets
      are positive. The overall sentiment is ______ with ____ of tweets being
      positive and ____ of tweets being negative.
    </Text>
  </Box>
);

export default Summary;
