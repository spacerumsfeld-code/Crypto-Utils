import { Box, Text } from '@chakra-ui/react';

const Summary = () => (
  <Box textAlign="center">
    <Text fontSize={['md', 'lg']}>
      Sentiment Summary! This is a placeholder paragraph to indicate an example
      size of a sentiment summary paragraph. Currently, 100 percent of tweets
      are positive. The overall sentiment is ______ with ____ of tweets being
      positive and ____ of tweets being negative
    </Text>
  </Box>
);

export default Summary;
