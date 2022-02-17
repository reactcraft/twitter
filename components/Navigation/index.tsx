import type NavigationProps from './NavigationProps';
import NavigationItem from '../NavigationItem';

const Navigation = ({ items }: NavigationProps) => (
  <nav className="flex justify-center lg:justify-start">
    <ul className="space-y-2">
      {items.map((item) => (
        <NavigationItem item={item} key={item.label} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
