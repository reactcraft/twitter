import type IconButtonProps from './IconButtonProps';
import Icon from '../Icon';

const IconButton = ({ icon, ariaLabel }: IconButtonProps) => (
  <button
    className="flex h-10 w-10 items-center justify-center rounded-full text-primary-500 hover:bg-primary-500 hover:bg-opacity-10"
    type="button"
    aria-label={ariaLabel}
  >
    <Icon icon={icon} />
  </button>
);

export default IconButton;
