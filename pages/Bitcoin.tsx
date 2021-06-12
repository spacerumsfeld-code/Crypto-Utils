import {
  Flex,
  Heading,
  VStack,
  Image,
  Box,
  Container,
  Text,
  useTabList
} from '@chakra-ui/react';
import axios from 'axios';
import utils from '@/utils/utils';

type BitcoinPageProps = {
  data: [number, string][];
};

const BitcoinPage = ({ data }: BitcoinPageProps) => (
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
        {data.map((el) => (
          <Text key={el[0]}>{el[0]}</Text>
        ))}
      </VStack>
      <VStack pl={[null, '5rem', '5rem']}>
        <Heading fontSize="sm">Negative Tweets</Heading>
        {data.map((el) => (
          <Text key={el[1]}>{el[1]}</Text>
        ))}
      </VStack>
    </Flex>
  </Flex>
);

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const url = 'https://jsonplaceholder.typicode.com/users';
  const res = await axios.get(url);
  const data = res.data.map((user) => [user.id, user.name]);
  console.log(data);

  return {
    props: {
      data
    }
  };
}

export async function getStaticProps() {
  const tweets = await utils.getTweets('Bitcoin');
  const tweetsWithSentiment = await utils.analyzeSentiment();
  const;
}

/*
      const positiveTweets = response.data.filter(({ sentiment }) => sentiment === 'Positive');
      setPositive(positiveTweets);

      const negativeTweets = response.data.filter(({ sentiment }) => sentiment === 'Negative');
      setNegative(negativeTweets);
    })
    .catch((err) => console.log(err));
};
*/

/*
exports.getTweets = async (req, res) => {
  try {
    let coin = req.query.coin;
    const tweets = await helpers.getTweets(coin);
    const analyzedTweets = await helpers.sentimentAnalysis(tweets);
    const finalData = await helpers.formatData(analyzedTweets);
    res.status(200).send(finalData);
  }
  catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
*/

export default BitcoinPage;
