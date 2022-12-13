import { type NextPage } from 'next';

import { trpc } from '@utils/trpc';
import BoardName from '@atoms/BoardName';
import Roadmap from '@atoms/Roadmap';
import UserBox from '@components/UserBox';
import ScorePill from '@atoms/ScorePill';
import Post from '@components/Post';

const Home: NextPage = () => {
  const { data: posts, isFetching } = trpc.post.getPosts.useQuery();

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-purple p-6">
        <BoardName name="Frontend Mentor" />
        <div>
          <ScorePill score="5" />
        </div>
        <Roadmap
          roadmapLink="/"
          status={[
            { name: 'Planned', count: 0, color: 'bg-orange' },
            { name: 'In-Progress', count: 0, color: 'bg-purple' },
            { name: 'Live', count: 0, color: 'bg-ocean-blue' },
          ]}
        />
        <UserBox />
        {isFetching && 'FETCHING'}
      </div>
      <div className="flex max-w-sm flex-col gap-6 p-6 @container">
        {posts?.map((post) => {
          return (
            <Post
              key={post.id}
              {...post}
              category={{
                name: post.category.name,
                href: `/category/${post.category.slug}`,
              }}
              commentCount={0}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
