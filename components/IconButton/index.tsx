import classNames from 'classnames';
import type IconButtonProps from './IconButtonProps';
import Icon from '../Icon';

const IconButton = ({
  className,
  color = 'primary',
  icon,
  ariaLabel,
}: IconButtonProps) => (
  <button
    className={classNames(
      'flex h-10 w-10 items-center justify-center rounded-full hover:bg-primary-500 hover:bg-opacity-10 hover:text-primary-500',
      {
        'text-primary-600': color === 'primary',
        'text-muted': color === 'muted',
      },
      className
    )}
    type="button"
    aria-label={ariaLabel}
  >
    <Icon icon={icon} />
  </button>
);

export default IconButton;
