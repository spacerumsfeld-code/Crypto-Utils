import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

type Tweet = {
  id: string;
  text: string;
};

/* I cast the options object as AxiosRequestConfig because if I did not, the "method" property was being flagged. This is because in the typing, method must have the method wrapped in double quotes. Quite a silly obstruction to run into.*/

const getTweets = async (asset: string): Promise<Tweet[] | undefined> => {
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

type ClassificationData = {
  tag_name: string;
  tag_id: number;
  confidence: number;
};

type SentimentDataPoint = {
  text: string;
  external_id: boolean;
  error: boolean;
  classifications: ClassificationData[];
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
    const newTweets = response.data;
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
