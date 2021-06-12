import axios from 'axios';

const getTweets = async (asset: string) => {
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

const analyzeSentiment = async () => {};

const processData = async () => {};
