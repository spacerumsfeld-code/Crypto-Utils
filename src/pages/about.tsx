import {
  Flex,
  Box,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel
} from '@chakra-ui/react';
import SHeader from '@/sentimentComponents/SHeader';
import AssetIcon from '@/sentimentComponents/AssetIcon';
import PositiveTweets from '@/sentimentComponents/PositiveTweets';
import NegativeTweets from '@/sentimentComponents/NegativeTweets';

const tweets = [
  { text: 'hahahahahahahaahah' },
  { text: 'hahahahahahahaahah' },
  { text: 'hahahahahahahaahah' },
  { text: 'hahahahahahahaahah' },
  { text: 'hahahahahahahaahah' },
  { text: 'hahahahahahahaahah' }
];

const AboutPage = () => (
  <Flex direction="column" justifyContent="flex-start" alignItems="center">
    <SHeader asset={'bitcoin'} />
    <AssetIcon asset={'section-image'} />
    <Stack w={['80%', '70%']}>
      <Box textAlign="center">
        <Text fontSize={['md', 'lg']}>
          Sentiment Summary! This is a placeholder paragraph to indicate an
          example size of a sentiment summary paragraph. Currently, 100 percent
          of tweets are positive. The overall sentiment is ______ with ____ of
          tweets being positive and ____ of tweets being negative
        </Text>
      </Box>
      <Accordion allowMultiple defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex={1} textAlign="center">
                Positive Tweets
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <PositiveTweets positive={tweets} />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex={1} textAlign="center">
                Negative Tweets
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <NegativeTweets negative={tweets} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  </Flex>
);

export default AboutPage;
