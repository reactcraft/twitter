import type TweetProps from './TweetProps';
import Avatar from '../Avatar';
import { dayjs } from '../../lib';
import TweetActions from '../TweetActions';

const Tweet = ({ tweet }: TweetProps) => (
  <li className="grid grid-cols-[2.5rem,1fr] items-start gap-3 p-3">
    <Avatar src={tweet.user.photoURL} alt={tweet.user.username} />
    <div>
      <div className="flex gap-1">
        <h2 className="text-sm">{tweet.user.displayName}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{`@${
          tweet.user.username
        } · ${dayjs(tweet.createdAt).fromNow()}`}</p>
      </div>
      <p className="text-sm">{tweet.body}</p>
      <TweetActions tweet={tweet} />
    </div>
  </li>
);

export default Tweet;
