import classNames from 'classnames';
import type SidebarProps from './SidebarProps';

const Sidebar = ({ className, children }: SidebarProps) => (
  <aside className={classNames('py-3 xl:p-3', className)}>{children}</aside>
);

export default Sidebar;
