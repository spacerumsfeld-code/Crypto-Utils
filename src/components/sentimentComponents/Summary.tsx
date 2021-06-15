import { Box, Text } from '@chakra-ui/react';

//add positive and negative to props, bring in utility function that assigns sentiment descriptors based on ratios in those props, render from the result of the util with template literals

type SummaryProps = {
  asset: string;
  positiveCount: number;
  negativeCount: number;
};

const Summary = ({ asset, positiveCount, negativeCount }: SummaryProps) => (
  <Box mb={4} textAlign="center">
    <Text fontSize={['md', 'lg']}>
      {`Currently, the overall market sentiment toward ${asset} is PLACEHOLDER, with ${positiveCount} positive tweets and ${negativeCount} negative tweets from a representative sample.`}
    </Text>
  </Box>
);

export default Summary;
