import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import type NavigationItemProps from './NavigationItemProps';
import Icon from '../Icon';

const NavigationItem = ({ item }: NavigationItemProps) => {
  const router = useRouter();
  const active = item.href === router.pathname;

  return (
    <li>
      <Link href={item.href}>
        <a
          className="hover:bg-muted inline-flex items-center gap-3 rounded-full p-3 xl:p-2.5"
          aria-label={item.label}
        >
          <Icon icon={active ? item.activeIcon : item.inactiveIcon} size={24} />
          <span
            className={classNames('hidden text-xl xl:inline', {
              'font-bold': active,
            })}
          >
            {item.label}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
