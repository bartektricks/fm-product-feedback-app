import type { AppRouter } from '@server/trpc/router/_app';
import type { inferRouterOutputs } from '@trpc/server';

export default function getNumberOfComments(
  comments?: Extract<
    inferRouterOutputs<AppRouter>['post']['getPost'],
    object
  >['comments'],
) {
  return (
    comments?.reduce(
      (sum, comment) => (sum += comment.Children.length + 1),
      0,
    ) || 0
  );
}
