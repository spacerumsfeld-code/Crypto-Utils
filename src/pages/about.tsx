import {
  Flex,
  Box,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel
} from '@chakra-ui/react';

import SHeader from '@/sentimentComponents/SHeader';
import AssetIcon from '@/sentimentComponents/AssetIcon';
import Summary from '@/sentimentComponents/Summary';
import PositiveTweets from '@/sentimentComponents/PositiveTweets';
import NegativeTweets from '@/sentimentComponents/NegativeTweets';

import utils from '@/lib/utils';

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
      <Summary />
      <Accordion allowMultiple allowToggle>
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
