import type ButtonProps from './ButtonProps';

const Button = ({ children }: ButtonProps) => (
  <button
    className="rounded-full bg-primary-500 p-2.5 text-sm font-bold text-white"
    type="button"
  >
    {children}
  </button>
);

export default Button;
