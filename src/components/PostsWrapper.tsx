import type { Category, Post as PrismaPost } from '@prisma/client';
import Post from './Post';

type PostType = Pick<PrismaPost, 'id' | 'title' | 'body' | 'score' | 'slug'> & {
  category: Pick<Category, 'name' | 'slug'>;
};

export default function PostsWrapper({ posts }: { posts?: PostType[] }) {
  return (
    <div className="gap-4 bg-very-light-grey pt-8 pb-14 @container">
      {posts?.map((post) => (
        <Post
          key={post.id}
          {...post}
          category={{
            href: `/category/${post.category.slug}`,
            name: post.category.name,
          }}
          commentCount={0}
        />
      ))}
    </div>
  );
}
