import type TweetProps from './TweetProps';
import Avatar from '../Avatar';
import DisplayName from '../DisplayName';
import { formatUsername } from '../../utils';
import { dayjs } from '../../lib';
import TweetActions from '../TweetActions';

const Tweet = ({ tweet }: TweetProps) => (
  <li className="grid grid-cols-[2.5rem,1fr] items-start gap-3 p-3">
    <Avatar src={tweet.user.photoURL} alt={tweet.user.username} />
    <div>
      <div className="flex gap-1">
        <DisplayName user={tweet.user} />
        <p className="text-muted text-sm">{`${formatUsername(
          tweet.user.username
        )} · ${dayjs(tweet.createdAt).fromNow()}`}</p>
      </div>
      <p className="text-sm">{tweet.body}</p>
      <TweetActions tweet={tweet} />
    </div>
  </li>
);

export default Tweet;
