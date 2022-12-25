import Button from '@atoms/Button';
import { useRouter } from 'next/router';
import { trpc } from '@utils/trpc';
import Error from 'next/error';
import { useSession } from 'next-auth/react';
import Post from '@components/Post';
import GoBack from '@atoms/GoBack';
import PostComments from '@components/PostComments';
import getNumberOfComments from '@utils/getNumberOfComments';

export default function PostPage() {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const { slug } = router.query;
  const commentMutation = trpc.post.addComment.useMutation();

  const { data: post } = trpc.post.getPost.useQuery({ slug: String(slug) });

  const commentsCount = getNumberOfComments(post?.comments);

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
      <Post {...post} commentCount={commentsCount} />
      {!!post.comments.length && (
        <PostComments comments={post.comments} commentsCount={commentsCount} />
      )}
      <div>
        <form>
          <label htmlFor="">Add Comment</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            maxLength={250}
          ></textarea>
          <div>
            <span>250 Characters left</span>
            <Button
              type="submit"
              color="purple"
              onClick={async () => {
                commentMutation.mutate({
                  parentId: 'clc3ctkqw00013rf8bpqjq5gd',
                  postId: post.id,
                  body: 'Hello world',
                });
              }}
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
