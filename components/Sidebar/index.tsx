import classNames from 'classnames';
import type SidebarProps from './SidebarProps';

const Sidebar = ({ className, children }: SidebarProps) => (
  <aside className={classNames('px-4 py-2', className)}>{children}</aside>
);

export default Sidebar;
