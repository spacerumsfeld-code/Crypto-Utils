import {
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Container,
  Text
} from '@chakra-ui/react';
import utils from '@/lib/utils';

const BitcoinPage = () => (
  <Container>
    <Flex flexDirection="row">
      <Heading>Crypto Digest</Heading>
      <Text>Your favorite digital cryptocurrency sentiment app!</Text>
    </Flex>
  </Container>
);

export async function getStaticProps() {
  const tweets = await utils.getTweets('Bitcoin');
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
      positiveTweets,
      negativeTweets
    }
  };
}

export default BitcoinPage;
