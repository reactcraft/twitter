import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

const Navigation = ({ items }: NavigationProps) => (
  <nav>
    <ul className="space-y-3">
      {items.map((item) => (
        <NavigationItem item={item} key={item.label} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
