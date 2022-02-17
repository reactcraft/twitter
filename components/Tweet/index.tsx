import type TweetProps from './TweetProps';
import Avatar from '../Avatar';
import DisplayName from '../DisplayName';
import { formatUsername } from '../../utils';
import { dayjs } from '../../lib';
import IconButton from '../IconButton';
import TweetActions from '../TweetActions';

const Tweet = ({ tweet }: TweetProps) => (
  <li className="relative grid grid-cols-[3rem,1fr] items-start gap-3 p-3">
    <Avatar src={tweet.user.photoURL} alt={tweet.user.username} />
    <div>
      <div className="flex gap-1 pr-5">
        <DisplayName user={tweet.user} />
        <p className="text-muted text-sm">{`${formatUsername(
          tweet.user.username
        )} · ${dayjs(tweet.createdAt).fromNow()}`}</p>
      </div>
      <IconButton
        className="absolute top-0.5 right-0.5"
        color="muted"
        icon="ellipsis-horizontal"
        ariaLabel="More"
      />
      <p className="text-sm">{tweet.body}</p>
      <TweetActions tweet={tweet} />
    </div>
  </li>
);

export default Tweet;
