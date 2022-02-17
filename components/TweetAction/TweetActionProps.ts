import type { Icon, TweetActionColor } from '../../types';

type TweetActionProps = {
  color?: TweetActionColor;
  icon: Icon;
  count?: number;
  ariaLabel: string;
};

export default TweetActionProps;
