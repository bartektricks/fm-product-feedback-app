import Comment from '@atoms/Comment';
import type { AppRouter } from '@server/trpc/router/_app';
import type { inferRouterOutputs } from '@trpc/server';

type PostCommentsProps = {
  commentsCount: number;
  comments: Extract<
    inferRouterOutputs<AppRouter>['post']['getPost'],
    object
  >['comments'];
};

export default function PostComments({
  comments,
  commentsCount,
}: PostCommentsProps) {
  return (
    <div className="rounded-xl bg-white p-6 @container">
      <div className="mb-6">{commentsCount} comments</div>
      <ul>
        {comments.map((comment) => {
          const hasReplies = !!comment.Children.length;
          return (
            <li
              key={comment.id}
              className={`mb-6 border-b pb-6 last:mb-0 last:border-b-0 last:pb-0`}
            >
              <Comment
                image={comment.user.image}
                name={comment.user.name}
                login={comment.user.login}
                body={comment.body}
              />
              {hasReplies && (
                <ul className="mt-6 pl-6 @xl:pl-12">
                  {comment.Children.map((reply) => (
                    <li key={reply.id} className={`relative mb-6 last:mb-0 `}>
                      <Comment
                        image={reply.user.image}
                        name={reply.user.name}
                        login={reply.user.login}
                        body={reply.body}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
