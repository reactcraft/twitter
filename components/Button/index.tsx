import classNames from 'classnames';
import type ButtonProps from './ButtonProps';

const Button = ({ color = 'primary', children }: ButtonProps) => (
  <button
    className={classNames(
      'rounded-full bg-primary-500 p-2.5 text-sm font-bold text-white',
      {
        'bg-primary-500 text-white': color === 'primary',
        'bg-gray-900 text-white dark:bg-white dark:text-gray-900':
          color === 'secondary',
      }
    )}
    type="button"
  >
    {children}
  </button>
);

export default Button;
