import axios from 'axios';

type Tweet = {
  id: string;
  text: string;
};

const getTweets = async (asset: string): Promise<Tweet[]> => {
  try {
    const options = {
      method: 'GET',
      url: `https://api.twitter.com/2/tweets/search/recent?query=${asset}&max_results=10`,
      Authorization: `Bearer ${process.env.Twitter_Token}`,
      Cookie:
        'guest_id=v1%3A161576573540526140; personalization_id="v1_o2eZFqw0uy5xLkP42RkTJA=="'
    };
    const response = await axios(options);
    const tweets = response.data.data;
    return tweets;
  } catch (err) {
    console.log(err);
  }
};

//add Type for response from monkeyLearn API (I dont remember and feel like proceeding with coding)

const analyzeSentiment = async (tweets: Tweet[]) => {
  const processedTweets = tweets.map(({ text }) => text);
  try {
    const options = {
      method: 'POST',
      url: `${process.env.MONKEY_API}`,
      headers: {
        Authorization: `Token ${process.env.MONKEY_TOKEN}`
        // 'Content-Type': 'application/json'
      },
      data: processedTweets
    };
    const response = await axios(options);
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

const formatData = (tweets): FormattedTweet[] => {
  const finalTweets = tweets.map((tweet) => ({
    text: tweet.text,
    sentiment: tweet.classifications[0].tag_name
  }));
  return finalTweets;
};

const utils = { getTweets, analyzeSentiment, formatData };
export default utils;
