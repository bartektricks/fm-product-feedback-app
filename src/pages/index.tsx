import { type NextPage } from 'next';
import { trpc } from '@utils/trpc';

import PostsWrapper from '@components/PostsWrapper';
import HomeHeader from '@components/HomeHeader';
import FeedbackBar from '@components/FeedbackBar';

const Home: NextPage = () => {
  const { data: posts, isFetching } = trpc.post.getPosts.useQuery();

  //TODO Create SORT context.
  return (
    <>
      <div className="container gap-8 md:py-8 xl:flex xl:py-24">
        <div className="-mx-gutter flex-shrink-0 basis-[16rem] md:mx-0">
          <HomeHeader />
        </div>
        <div className="-mx-gutter basis-full md:mx-0">
          <FeedbackBar postCount={posts?.length} />
          <PostsWrapper posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
