import type { Category, Post as PrismaPost } from '@prisma/client';
import TopGGuy from '@assets/suggestions/illustration-empty.svg';
import Post from './Post';
import Button from '@atoms/Button';

type PostType = Pick<PrismaPost, 'id' | 'title' | 'body' | 'score' | 'slug'> & {
  category: Pick<Category, 'name' | 'slug'>;
};

export default function PostsWrapper({ posts }: { posts?: PostType[] }) {
  return (
    <div className="mx-gutter gap-4 bg-very-light-grey pt-8 pb-14 @container md:mx-0">
      {!posts ? (
        <div className="rounded-xl bg-white py-20 text-center @3xl:py-28">
          <div className="mx-auto max-w-[25.625rem]">
            <TopGGuy className="mb-10 inline-block @3xl:mb-12" />
            <h3 className="mb-4 text-display3 text-darkest-grey @3xl:text-display1">
              There is no feedback yet.
            </h3>
            <p className="mb-6 text-body3 text-grey @3xl:mb-12 @3xl:text-body1">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <Button href="/feedback/add" color="purple">
              + Add Feedback
            </Button>
          </div>
        </div>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} commentCount={0} />)
      )}
    </div>
  );
}
