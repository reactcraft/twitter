import Icon from '../Icon';

const TweetButton = () => (
  <button
    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white xl:w-full"
    type="button"
    aria-label="Tweet"
  >
    <Icon className="xl:hidden" icon="add-outline" size={24} />
    <span className="hidden font-bold xl:inline">Tweet</span>
  </button>
);

export default TweetButton;
