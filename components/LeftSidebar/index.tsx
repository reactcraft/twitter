import Sidebar from '../Sidebar';
import HomeLink from '../HomeLink';
import Navigation from '../Navigation';

const LeftSidebar = () => (
  <Sidebar className="flex flex-col items-center gap-2 lg:items-start">
    <HomeLink />
    <Navigation
      items={[
        {
          activeIcon: 'home',
          inactiveIcon: 'home-outline',
          label: 'Home',
          href: '/',
        },
        {
          activeIcon: 'compass',
          inactiveIcon: 'compass-outline',
          label: 'Explore',
          href: '/explore',
        },
        {
          activeIcon: 'notifications',
          inactiveIcon: 'notifications-outline',
          label: 'Notifications',
          href: '/notifications',
        },
        {
          activeIcon: 'mail',
          inactiveIcon: 'mail-outline',
          label: 'Messages',
          href: '/messages',
        },
        {
          activeIcon: 'bookmark',
          inactiveIcon: 'bookmark-outline',
          label: 'Bookmarks',
          href: '/bookmarks',
        },
        {
          activeIcon: 'reader',
          inactiveIcon: 'reader-outline',
          label: 'Lists',
          href: '/lists',
        },
        {
          activeIcon: 'person',
          inactiveIcon: 'person-outline',
          label: 'Profile',
          href: '/profile',
        },
      ]}
    />
  </Sidebar>
);

export default LeftSidebar;
