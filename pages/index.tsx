import type { NextPage } from 'next';
import Head from 'next/head';
import { TweetForm, Tweets } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Twitter</title>
        <meta name="description" content="Home | Twitter" />
      </Head>
      <TweetForm
        user={{
          id: '1',
          photoURL: 'https://avatars.githubusercontent.com/u/99895370?v=4',
          displayName: 'ReactCraft',
          verified: true,
          username: 'reactcraft',
        }}
      />
      <Tweets
        tweets={[
          {
            id: '1',
            user: {
              id: '1',
              photoURL: 'https://avatars.githubusercontent.com/u/99895370?v=4',
              displayName: 'ReactCraft',
              verified: true,
              username: 'reactcraft',
            },
            createdAt: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, nisl id ornare accumsan, metus diam luctus augue, a tristique est justo in ante. Nunc luctus arcu in quam dictum aliquam.',
            comments: 16,
            retweets: 11,
            likes: 27,
          },
          {
            id: '2',
            user: {
              id: '1',
              photoURL: 'https://avatars.githubusercontent.com/u/99895370?v=4',
              displayName: 'ReactCraft',
              verified: true,
              username: 'reactcraft',
            },
            createdAt: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, nisl id ornare accumsan, metus diam luctus augue, a tristique est justo in ante. Nunc luctus arcu in quam dictum aliquam.',
            comments: 4,
            retweets: 6,
            likes: 11,
          },
          {
            id: '3',
            user: {
              id: '1',
              photoURL: 'https://avatars.githubusercontent.com/u/99895370?v=4',
              displayName: 'ReactCraft',
              verified: true,
              username: 'reactcraft',
            },
            createdAt: new Date(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, nisl id ornare accumsan, metus diam luctus augue, a tristique est justo in ante. Nunc luctus arcu in quam dictum aliquam.',
            comments: 7,
            retweets: 4,
            likes: 15,
          },
        ]}
      />
    </>
  );
};

export default Home;
