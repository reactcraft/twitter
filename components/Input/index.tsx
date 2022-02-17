import classNames from 'classnames';
import type InputProps from './InputProps';
import Icon from '../Icon';

const Input = ({ icon, placeholder, ariaLabel }: InputProps) => (
  <div className="relative">
    {icon && <Icon className="absolute left-3 top-3.5" icon={icon} />}
    <input
      className={classNames(
        'bg-muted block w-full rounded-full py-3.5 pr-3 text-sm',
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
