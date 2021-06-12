import { Flex, Image, Box, Text, Stack } from '@chakra-ui/react';
import SHeader from '@/sentimentComponents/SHeader';

const AboutPage = () => (
  <Flex direction="column" justifyContent="flex-start" alignItems="center">
    <SHeader asset={'bitcoin'} />
    <Box
      border="1px solid white"
      position={['relative', 'relative', 'relative', 'relative', 'absolute']}
      top={[null, '6rem']}
      left={[null, '10rem', '15rem']}
    >
      <Image
        maxBlockSize="150px"
        src="/section-image.png"
        alt="section image"
        borderRadius="8px"
      />
    </Box>
    <Stack w={['80%', '70%']} border="1px solid white">
      <Box>
        <Text fontSize={['md', 'lg']}>
          Sentiment Summary! This is a placeholder paragraph to indicate an
          example size of a sentiment summary paragraph. Currently, 100 percent
          of tweets are positive. The overall sentiment is ______ with ____ of
          tweets being positive and ____ of tweets being negative
        </Text>
      </Box>
    </Stack>
  </Flex>
);

export default AboutPage;
