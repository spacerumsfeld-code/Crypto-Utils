import {
  Flex,
  Box,
  Text,
  Stack,
  VStack,
  StackDivider,
  useColorModeValue
} from '@chakra-ui/react';
import SHeader from '@/sentimentComponents/SHeader';
import AssetIcon from '@/sentimentComponents/AssetIcon';

const AboutPage = () => {
  const bg = useColorModeValue('gray.700', 'whiteAlpha.900');
  return (
    <Flex direction="column" justifyContent="flex-start" alignItems="center">
      <SHeader asset={'bitcoin'} />
      <AssetIcon asset={'section-image'} />
      <Stack w={['80%', '70%']}>
        <Box>
          <Text fontSize={['md', 'lg']}>
            Sentiment Summary! This is a placeholder paragraph to indicate an
            example size of a sentiment summary paragraph. Currently, 100
            percent of tweets are positive. The overall sentiment is ______ with
            ____ of tweets being positive and ____ of tweets being negative
          </Text>
        </Box>
        <VStack
          mt={4}
          border="1px solid white"
          divider={<StackDivider borderColor={bg} />}
          spacing={4}
          align="stretch"
        >
          <Text>Tweet 1 bro!</Text>
          <Text>Tweet 1 bro!</Text>
          <Text>Tweet 1 bro!</Text>
          <Text>Tweet 1 bro!</Text>
          <Text>Tweet 1 bro!</Text>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default AboutPage;
