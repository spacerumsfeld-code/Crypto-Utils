import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type Tweet = {
  id: string;
  text: string;
};

//'asset' is cast as possibly undefined or an array of strings here even though it never will be in order to make typescript happy. this originates in the loose typing of 'params' in the getStaticProps function seen in the [asset] page.

const getTweets = async (
  asset: string | string[] | undefined
): Promise<Tweet[] | undefined> => {
  try {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: `https://api.twitter.com/2/tweets/search/recent?query=${asset}&max_results=100`,
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

const setSentiment = (
  positiveCount: number,
  negativeCount: number
): string[] => {
  const ratio = positiveCount / negativeCount;
  const green = 'green.500';
  const red = 'red.500';

  if (ratio === 0) return ['extremely positive', 'euphoria', 'green'];
  else if (positiveCount === negativeCount)
    return ['neutral', 'uncertainty', 'gray.500'];

  return ratio >= 3
    ? ['extremely positive', 'euphoria', green]
    : ratio >= 1.5
    ? ['quite positive', 'excitement', green]
    : ratio >= 0.4
    ? ['neutral', 'uncertainty', 'gray.500']
    : ratio >= 0.25
    ? ['very negative', 'fear', red]
    : ['extremely negative', 'panic', red];
};

const utils = { getTweets, analyzeSentiment, formatData, setSentiment };
export default utils;
