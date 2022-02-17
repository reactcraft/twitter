import type LayoutProps from './LayoutProps';
import LeftSidebar from '../LeftSidebar';
import Main from '../Main';
import RightSidebar from '../RightSidebar';

const Layout = ({ children }: LayoutProps) => (
  <div className="grid h-screen grid-cols-[4rem,1fr] lg:container lg:grid-cols-[20rem,1fr,20rem]">
    <LeftSidebar />
    <Main>{children}</Main>
    <RightSidebar />
  </div>
);

export default Layout;
