import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type Tweet = {
  id: string;
  text: string;
};

//'asset' is cast as possibly undefined, even though under no circumstances will it be. Here is the chain that lead to this: getStaticPaths (defined params /w "asset" property, which is a string):
//getStaticProps typing thinks params COULD be undefined (even though in this context it never will be), and therefore the "asset" property could be undefined. So, to make TS happy 'undefined' has been added as a potential input here. But it cannot occur in our circumstance.

const getTweets = async (
  asset: string | string[] | undefined
): Promise<Tweet[] | undefined> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://api.twitter.com/2/tweets/search/recent?query=${asset}&max_results=10`,
      headers: {
        id: '1',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TWITTER_TOKEN}`,
        Cookie:
          'guest_id=v1%3A161576573540526140; personalization_id="v1_o2eZFqw0uy5xLkP42RkTJA=="'
      }
    };
    const response: AxiosResponse = await axios(options);
    const tweets: Tweet[] = response.data.data;
    return tweets;
  } catch (err) {
    console.log(err);
  }
};

type SentimentDataPoint = {
  text: string;
  external_id: boolean;
  error: boolean;
  classifications: ClassificationData[];
};

type ClassificationData = {
  tag_name: string;
  tag_id: number;
  confidence: number;
};

const analyzeSentiment = async (
  tweets: Tweet[]
): Promise<SentimentDataPoint[] | undefined> => {
  const processedTweets = tweets.map(({ text }) => text);
  try {
    const options: AxiosRequestConfig = {
      method: 'POST',
      url: `${process.env.MONKEY_API}`,
      headers: {
        Authorization: `Token ${process.env.MONKEY_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: {
        data: processedTweets
      }
    };
    const response: AxiosResponse = await axios(options);
    const newTweets: SentimentDataPoint[] = response.data;
    return newTweets;
  } catch (err) {
    console.log(err);
  }
};

type FormattedTweet = {
  text: string;
  sentiment: string;
};

const formatData = (sentimentData: SentimentDataPoint[]): FormattedTweet[] => {
  const finalTweets = sentimentData.map((dataPoint) => ({
    text: dataPoint.text,
    sentiment: dataPoint.classifications[0].tag_name
  }));
  return finalTweets;
};

const utils = { getTweets, analyzeSentiment, formatData };
export default utils;
