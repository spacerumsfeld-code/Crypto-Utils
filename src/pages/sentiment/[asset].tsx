import {
  Container,
  Flex,
  Box,
  Stack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  useColorModeValue
} from '@chakra-ui/react';

import SHeader from '@/sentimentComponents/SHeader';
import AssetIcon from '@/sentimentComponents/AssetIcon';
import Summary from '@/sentimentComponents/Summary';
import PositiveTweets from '@/sentimentComponents/PositiveTweets';
import NegativeTweets from '@/sentimentComponents/NegativeTweets';

import { GetStaticProps, GetStaticPaths } from 'next';
import utils from '@/lib/sentiment-utils';

type Tweet = {
  id: string;
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
}: SentimentPageProps) => {
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Container
      borderRadius="8px"
      h="100%"
      p="1rem"
      maxW={['80%', '70%']}
      bg={bg}
      shadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
    >
      <Flex direction="column" justifyContent="flex-start" alignItems="center">
        <SHeader asset={asset} />
        <AssetIcon asset={asset} />
        <Stack w={['80%', '70%']}>
          <Summary
            asset={asset}
            positiveCount={positiveTweets.length}
            negativeCount={negativeTweets.length}
          />
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
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { asset: 'bitcoin' } },
      { params: { asset: 'ethereum' } },
      { params: { asset: 'dogecoin' } }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let asset = params?.asset;
  const tweets = await utils.getTweets(asset);
  if (!tweets) return { notFound: true };

  const sentimentData = await utils.analyzeSentiment(tweets);
  if (!sentimentData) return { notFound: true };

  const positiveTweets = sentimentData.filter(
    ({ sentiment }) => sentiment === 'Positive'
  );
  const negativeTweets = sentimentData.filter(
    ({ sentiment }) => sentiment === 'Negative'
  );
  //this check is necessitated by Next's loose typing of 'params'; I know it will always be a string, but typescript thinks it may not be.
  if (typeof asset === 'string') {
    asset = asset.slice(0, 1).toUpperCase() + asset.slice(1);
  }

  return {
    props: {
      asset,
      positiveTweets,
      negativeTweets
    },
    revalidate: 60 * 60 * 24
  };
};

export default SentimentPage;
