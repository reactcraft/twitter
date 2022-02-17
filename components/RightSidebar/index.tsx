import Sidebar from '../Sidebar';
import WhoToFollow from '../WhoToFollow';

const RightSidebar = () => (
  <Sidebar className="hidden xl:block">
    <WhoToFollow
      users={[
        {
          id: '1',
          photoURL: 'https://avatars.githubusercontent.com/u/99895370?v=4',
          displayName: 'ReactCraft',
          verified: true,
          username: 'reactcraft',
        },
      ]}
    />
  </Sidebar>
);

export default RightSidebar;
