import {
  IoBookmark,
  IoBookmarkOutline,
  IoCompass,
  IoCompassOutline,
  IoHome,
  IoHomeOutline,
  IoLogoTwitter,
  IoMail,
  IoMailOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoPerson,
  IoPersonOutline,
  IoReader,
  IoReaderOutline,
} from 'react-icons/io5';
import type IconProps from './IconProps';

const Icon = ({ icon, size = 20 }: IconProps) => {
  switch (icon) {
    case 'bookmark':
      return <IoBookmark size={size} />;
    case 'bookmark-outline':
      return <IoBookmarkOutline size={size} />;
    case 'compass':
      return <IoCompass size={size} />;
    case 'compass-outline':
      return <IoCompassOutline size={size} />;
    case 'home':
      return <IoHome size={size} />;
    case 'home-outline':
      return <IoHomeOutline size={size} />;
    case 'logo-twitter':
      return <IoLogoTwitter size={size} />;
    case 'mail':
      return <IoMail size={size} />;
    case 'mail-outline':
      return <IoMailOutline size={size} />;
    case 'notifications':
      return <IoNotifications size={size} />;
    case 'notifications-outline':
      return <IoNotificationsOutline size={size} />;
    case 'person':
      return <IoPerson size={size} />;
    case 'person-outline':
      return <IoPersonOutline size={size} />;
    case 'reader':
      return <IoReader size={size} />;
    case 'reader-outline':
      return <IoReaderOutline size={size} />;
    default:
      return null;
  }
};

export default Icon;
