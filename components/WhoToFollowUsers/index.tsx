import type WhoToFollowUsersProps from './WhoToFollowUsersProps';
import WhoToFollowUser from '../WhoToFollowUser';

const WhoToFollowUsers = ({ users }: WhoToFollowUsersProps) => (
  <ul>
    {users.map((user) => (
      <WhoToFollowUser user={user} key={user.id} />
    ))}
  </ul>
);

export default WhoToFollowUsers;
