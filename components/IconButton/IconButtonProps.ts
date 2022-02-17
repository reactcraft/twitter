import type { Icon, IconButtonColor } from '../../types';

type IconButtonProps = {
  className?: string;
  color?: IconButtonColor;
  icon: Icon;
  ariaLabel: string;
};

export default IconButtonProps;
