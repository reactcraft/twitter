import type Icon from './Icon';

type NavigationItem = {
  activeIcon: Icon;
  inactiveIcon: Icon;
  label: string;
  href: string;
};

export default NavigationItem;
