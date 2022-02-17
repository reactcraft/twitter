import Sidebar from '../Sidebar';
import Search from '../Search';
import WhoToFollow from '../WhoToFollow';

const RightSidebar = () => (
  <Sidebar className="hidden space-y-3 xl:block">
    <Search />
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
