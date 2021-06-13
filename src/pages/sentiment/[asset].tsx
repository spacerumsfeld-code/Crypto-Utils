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

type Tweet = {
  text: string;
  sentiment: string;
};

type SentimentPageProps = {
  asset: string;
  positiveTweets: Tweet[];
  negativeTweets: Tweet[];
};

const SentimentPage = ({
  asset,
  positiveTweets,
  negativeTweets
}: SentimentPageProps) => (
  <Flex direction="column" justifyContent="flex-start" alignItems="center">
    <SHeader asset={asset} />
    <AssetIcon asset={asset} />
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
            <PositiveTweets positive={positiveTweets} />
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
            <NegativeTweets negative={negativeTweets} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  </Flex>
);

export async function getStaticPaths() {
  return {
    paths: [
      { params: { asset: 'bitcoin' } },
      { params: { asset: 'ethereum' } },
      { params: { asset: 'dogecoin' } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const asset = params.asset;
  const tweets = await utils.getTweets(asset);
  const sentimentData = await utils.analyzeSentiment(tweets);
  const formattedTweets = utils.formatData(sentimentData);
  const positiveTweets = formattedTweets.filter(
    ({ sentiment }) => sentiment === 'Positive'
  );
  const negativeTweets = formattedTweets.filter(
    ({ sentiment }) => sentiment === 'Negative'
  );

  return {
    props: {
      asset,
      positiveTweets,
      negativeTweets
    }
  };
}

export default SentimentPage;
