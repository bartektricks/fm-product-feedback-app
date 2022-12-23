import Button from '@atoms/Button';
import { useRouter } from 'next/router';
import { trpc } from '@utils/trpc';
import Error from 'next/error';
import { useSession } from 'next-auth/react';
import Post from '@components/Post';
import GoBack from '@atoms/GoBack';

export default function PostPage() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== 'string') {
    return <Error statusCode={404} />;
  }

  const { data: post } = trpc.post.getPost.useQuery({ slug: slug });

  if (!post) {
    return <Error statusCode={404} />;
  }

  const isOwner = post.user.login === sessionData?.user?.login;

  return (
    <section className="mx-auto max-w-3xl px-gutter pt-6 pb-20">
      <header className="pb-6">
        <nav className="flex items-center justify-between">
          <GoBack href="/">Go Back</GoBack>
          {isOwner ? (
            <Button href={`/post/${post.slug}/edit`} color="blue">
              Edit Feedback
            </Button>
          ) : null}
        </nav>
      </header>
      <Post {...post} commentCount={0} />
      <div className="py-6">Implement comments</div>
    </section>
  );
}
