import type WhoToFollowUserProps from './WhoToFollowUserProps';
import Avatar from '../Avatar';
import DisplayName from '../DisplayName';
import { formatUsername } from '../../utils';
import Button from '../Button';

const WhoToFollowUser = ({ user }: WhoToFollowUserProps) => (
  <li className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <Avatar src={user.photoURL} alt={user.username} />
      <div>
        <DisplayName user={user} />
        <p className="text-muted text-sm">{formatUsername(user.username)}</p>
      </div>
    </div>
    <Button>Follow</Button>
  </li>
);

export default WhoToFollowUser;
