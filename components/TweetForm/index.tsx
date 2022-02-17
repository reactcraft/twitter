import TextareaAutosize from 'react-textarea-autosize';
import type TweetFormProps from './TweetFormProps';
import Avatar from '../Avatar';
import IconButton from '../IconButton';
import Button from '../Button';

const TweetForm = ({ user }: TweetFormProps) => (
  <div className="grid grid-cols-[3rem,1fr] items-start gap-3 p-3">
    <Avatar src={user.photoURL} alt={user.username} />
    <div>
      <TextareaAutosize
        className="block resize-none bg-transparent py-2.5 text-xl focus:outline-none"
        placeholder="What's happening?"
      />
      <div className="flex justify-between">
        <div className="flex">
          <IconButton icon="image-outline" ariaLabel="Media" />
          <IconButton icon="bar-chart-outline" ariaLabel="Poll" />
          <IconButton icon="happy-outline" ariaLabel="Emoji" />
          <IconButton icon="calendar-clear-outline" ariaLabel="Schedule" />
          <IconButton icon="location-outline" ariaLabel="Location" />
        </div>
        <Button>Tweet</Button>
      </div>
    </div>
  </div>
);

export default TweetForm;
