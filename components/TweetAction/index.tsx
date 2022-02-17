import classNames from 'classnames';
import type TweetActionProps from './TweetActionProps';
import Icon from '../Icon';

const TweetAction = ({
  color = 'primary',
  icon,
  count,
  ariaLabel,
}: TweetActionProps) => (
  <button
    className={classNames(
      'group relative flex items-center gap-1 text-gray-600 dark:text-gray-400',
      {
        'hover:text-primary-500': color === 'primary',
        'hover:text-emerald-500': color === 'emerald',
        'hover:text-pink-500': color === 'pink',
      }
    )}
    type="button"
    aria-label={ariaLabel}
  >
    <span
      className={classNames('rounded-full p-2 group-hover:bg-opacity-10', {
        'group-hover:bg-primary-500': color === 'primary',
        'group-hover:bg-emerald-500': color === 'emerald',
        'group-hover:bg-rose-500': color === 'pink',
      })}
    >
      <Icon icon={icon} />
    </span>
    {count && <span className="text-sm">{count}</span>}
  </button>
);

export default TweetAction;
