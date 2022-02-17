import type DisplayNameProps from './DisplayNameProps';
import Icon from '../Icon';

const DisplayName = ({ user }: DisplayNameProps) => (
  <div className="flex gap-1">
    <h2 className="text-sm">{user.displayName}</h2>
    {user.verified && (
      <Icon
        className="text-primary-500 dark:text-white"
        icon="checkmark-circle"
      />
    )}
  </div>
);

export default DisplayName;
