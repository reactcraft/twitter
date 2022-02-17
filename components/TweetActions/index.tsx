import type TweetActionsProps from './TweetActionsProps';
import TweetAction from '../TweetAction';

const TweetActions = ({ tweet }: TweetActionsProps) => (
  <div className="flex justify-between">
    <TweetAction
      icon="chatbubble-outline"
      count={tweet.comments}
      ariaLabel="Comment"
    />
    <TweetAction
      icon="repeat-outline"
      color="emerald"
      count={tweet.retweets}
      ariaLabel="Retweet"
    />
    <TweetAction
      icon="heart-outline"
      color="pink"
      count={tweet.likes}
      ariaLabel="Like"
    />
    <TweetAction icon="share-outline" ariaLabel="Share" />
  </div>
);

export default TweetActions;
