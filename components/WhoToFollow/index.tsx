import type WhoToFollowProps from './WhoToFollowProps';
import Card from '../Card';
import WhoToFollowUsers from '../WhoToFollowUsers';

const WhoToFollow = ({ users }: WhoToFollowProps) => (
  <Card title="Who to follow">
    <WhoToFollowUsers users={users} />
  </Card>
);

export default WhoToFollow;
