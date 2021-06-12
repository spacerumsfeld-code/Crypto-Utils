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

type FormattedTweet = {
  text: string;
  sentiment: string;
};

type BitcoinPageProps = {
  positiveTweets: FormattedTweet[];
  negativeTweets: FormattedTweet[];
};

const BitcoinPage = ({ positiveTweets, negativeTweets }: BitcoinPageProps) => (
  <Flex
    flexDirection="column"
    h="100%"
    alignItems="center"
    justifyItems="center"
    padding="1em"
    //overall container for content in order to have flex direction=column (flow downward)
  >
    <Flex
      flexDirection={['column', 'row', 'row']}
      alignItems="center"
      justifyContent="center"
      //Wrapper for Top Panel: flex-direction row, asset image+heading flex and Description
    >
      <Flex
        padding="1em"
        border="1px solid white"
        borderRadius="8px"
        flexDirection="column"
        alignItems="center"
        //Flex for image + header so that they stack vertically
      >
        <Box>
          <Image
            maxBlockSize={['200px', '300px', '400px']}
            borderRadius="8px"
            // objectFit="contain"
            src={'/section-image.png'}
            alt="asset"
          />
        </Box>
        <Heading>Bitcoin</Heading>
      </Flex>
      <Container border="1px solid white" centerContent>
        <Text fontSize="lg" border="1px solid white" padding="1em">
          Hello World. Welcome to the exciting world of Bitcoin. Introduced in
          2009, Bitcoin is a digital cryptocurrency that uses stuff to do cool
          things.
        </Text>
      </Container>
    </Flex>
    <Box
      border="1px solid white"
      mt={3}
      textAlign="center"
      maxW={['100%', '90%', '80%']}
      //Box for sentiment summary section: Heading and summarizing paragraph
    >
      <Heading fontSize="md">Sentiment Summary</Heading>
      <Text fontSize="xl">
        This paragraph will contain a brief sentiment of the sentiment data that
        came in from props. The plan is to have this be a template literal that
        drops in values based on the data!
      </Text>
    </Box>

    <Flex
      padding="1em"
      flexDirection={['column', 'row', 'row']}
      alignItems="center"
      justifyItems="center"
      //Flex Container for both positive and negative tweet stacks, will
      //switch flex direction to column for mobile
    >
      <VStack pr={[null, '5rem', '5rem']}>
        <Heading fontSize="sm">Positive Tweets</Heading>
        {positiveTweets.map((tweet) => (
          <Text key={tweet.text}>{tweet.text}</Text>
        ))}
      </VStack>
      <VStack pl={[null, '5rem', '5rem']}>
        <Heading fontSize="sm">Negative Tweets</Heading>
        {negativeTweets.map((tweet) => (
          <Text key={tweet.text}>{tweet.text}</Text>
        ))}
      </VStack>
    </Flex>
  </Flex>
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
