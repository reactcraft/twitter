import Icon from '../Icon';

const TweetButton = () => (
  <button
    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white lg:w-full"
    type="button"
    aria-label="Tweet"
  >
    <Icon className="lg:hidden" icon="add-outline" size={24} />
    <span className="hidden font-bold lg:inline">Tweet</span>
  </button>
);

export default TweetButton;
