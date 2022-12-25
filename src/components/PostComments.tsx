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
              className={`mb-6 overflow-hidden border-b border-grey border-opacity-25 pb-6 last:mb-0 last:border-b-0 last:pb-0 ${
                hasReplies
                  ? 'relative before:absolute before:left-0 before:top-0 before:-z-10 before:h-16 before:w-10 before:bg-white'
                  : ''
              }`}
            >
              <Comment
                image={comment.user.image}
                name={comment.user.name}
                login={comment.user.login}
                body={comment.body}
              />
              {hasReplies && (
                <ul className="mt-6 overflow-hidden pl-6 @xl:overflow-visible @xl:pl-12">
                  {comment.Children.map((reply, replyIndex) => (
                    <li key={reply.id} className={`relative mb-6 last:mb-0`}>
                      {comment.Children.length - 1 === replyIndex && (
                        <span
                          className={`absolute -left-6 -z-20 h-screen w-[1px] bg-grey opacity-10 @xl:-left-7 ${
                            replyIndex === 0 ? 'bottom-1/3' : 'bottom-16'
                          }`}
                        />
                      )}
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
