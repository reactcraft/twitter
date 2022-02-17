import classNames from 'classnames';
import type InputProps from './InputProps';
import Icon from '../Icon';

const Input = ({ icon, placeholder, ariaLabel }: InputProps) => (
  <div className="group relative">
    {icon && (
      <Icon
        className="text-muted absolute left-3 top-3.5 group-focus-within:text-primary-500"
        icon={icon}
      />
    )}
    <input
      className={classNames(
        'bg-muted block w-full rounded-full py-3.5 pr-3 text-sm focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-primary-500',
        {
          'pl-11': icon,
          'pl-3': !icon,
        }
      )}
      type="text"
      placeholder={placeholder}
      aria-label={ariaLabel}
    />
  </div>
);

export default Input;
