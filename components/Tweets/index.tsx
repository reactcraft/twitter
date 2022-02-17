import type TweetsProps from './TweetsProps';
import Tweet from '../Tweet';

const Tweets = ({ tweets }: TweetsProps) => (
  <ul className="divide-y">
    {tweets.map((tweet) => (
      <Tweet tweet={tweet} key={tweet.id} />
    ))}
  </ul>
);

export default Tweets;
