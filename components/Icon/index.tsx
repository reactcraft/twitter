import {
  IoAddOutline,
  IoBarChartOutline,
  IoBookmark,
  IoBookmarkOutline,
  IoCalendarClearOutline,
  IoChatbubbleOutline,
  IoCheckmarkCircle,
  IoCompass,
  IoCompassOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoHome,
  IoHomeOutline,
  IoImageOutline,
  IoLocationOutline,
  IoLogoTwitter,
  IoMail,
  IoMailOutline,
  IoNotifications,
  IoNotificationsOutline,
  IoPerson,
  IoPersonOutline,
  IoReader,
  IoReaderOutline,
  IoRepeatOutline,
  IoSearchOutline,
  IoShareOutline,
} from 'react-icons/io5';
import type IconProps from './IconProps';

const Icon = ({ className, icon, size = 20 }: IconProps) => {
  switch (icon) {
    case 'add-outline':
      return <IoAddOutline className={className} size={size} />;
    case 'bar-chart-outline':
      return <IoBarChartOutline className={className} size={size} />;
    case 'bookmark':
      return <IoBookmark className={className} size={size} />;
    case 'bookmark-outline':
      return <IoBookmarkOutline className={className} size={size} />;
    case 'calendar-clear-outline':
      return <IoCalendarClearOutline size={size} />;
    case 'chatbubble-outline':
      return <IoChatbubbleOutline className={className} size={size} />;
    case 'checkmark-circle':
      return <IoCheckmarkCircle className={className} size={size} />;
    case 'compass':
      return <IoCompass className={className} size={size} />;
    case 'compass-outline':
      return <IoCompassOutline className={className} size={size} />;
    case 'happy-outline':
      return <IoHappyOutline className={className} size={size} />;
    case 'heart-outline':
      return <IoHeartOutline className={className} size={size} />;
    case 'home':
      return <IoHome className={className} size={size} />;
    case 'home-outline':
      return <IoHomeOutline className={className} size={size} />;
    case 'image-outline':
      return <IoImageOutline className={className} size={size} />;
    case 'location-outline':
      return <IoLocationOutline className={className} size={size} />;
    case 'logo-twitter':
      return <IoLogoTwitter className={className} size={size} />;
    case 'mail':
      return <IoMail className={className} size={size} />;
    case 'mail-outline':
      return <IoMailOutline className={className} size={size} />;
    case 'notifications':
      return <IoNotifications className={className} size={size} />;
    case 'notifications-outline':
      return <IoNotificationsOutline className={className} size={size} />;
    case 'person':
      return <IoPerson className={className} size={size} />;
    case 'person-outline':
      return <IoPersonOutline className={className} size={size} />;
    case 'reader':
      return <IoReader className={className} size={size} />;
    case 'reader-outline':
      return <IoReaderOutline className={className} size={size} />;
    case 'repeat-outline':
      return <IoRepeatOutline className={className} size={size} />;
    case 'search-outline':
      return <IoSearchOutline className={className} size={size} />;
    case 'share-outline':
      return <IoShareOutline className={className} size={size} />;
    default:
      return null;
  }
};

export default Icon;
