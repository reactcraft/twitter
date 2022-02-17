import Link from 'next/link';
import Icon from '../Icon';

const HomeLink = () => (
  <Link href="/">
    <a className="rounded-full p-3 text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 dark:text-white dark:hover:bg-gray-800">
      <Icon icon="logo-twitter" size={24} />
    </a>
  </Link>
);

export default HomeLink;
