import type CardProps from './CardProps';

const Card = ({ title, children }: CardProps) => (
  <div className="space-y-3 rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
    <h2 className="text-lg">{title}</h2>
    {children}
  </div>
);

export default Card;
