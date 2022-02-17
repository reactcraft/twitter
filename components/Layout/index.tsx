import type LayoutProps from './LayoutProps';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';

const Layout = ({ children }: LayoutProps) => (
  <div className="grid h-screen grid-cols-[4rem,1fr] lg:container lg:grid-cols-[16rem,1fr,16rem]">
    <LeftSidebar />
    <main className="border-x">{children}</main>
    <RightSidebar />
  </div>
);

export default Layout;
