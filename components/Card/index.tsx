import type CardProps from './CardProps';

const Card = ({ title, children }: CardProps) => (
  <div className="bg-muted space-y-3 rounded-lg p-3">
    <h2 className="text-xl">{title}</h2>
    {children}
  </div>
);

export default Card;
