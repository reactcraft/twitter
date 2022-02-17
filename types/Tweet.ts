import type User from './User';

type Tweet = {
  id: string;
  user: User;
  createdAt: Date;
  body: string;
  comments: number;
  retweets: number;
  likes: number;
};

export default Tweet;
