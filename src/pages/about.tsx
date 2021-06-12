import { Flex, Heading, Image, Box, Text, Stack } from '@chakra-ui/react';

const AboutPage = () => (
  <Flex
    pt="2em"
    h="100%"
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    border="1px solid white"
  >
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid white"
    >
      <Heading fontSize="6vw">Github Emojis</Heading>
      <Text fontSize={['0.9em', '1em']}>
        Your favorite digital cryptocurrency sentiment app!
      </Text>
    </Flex>
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
