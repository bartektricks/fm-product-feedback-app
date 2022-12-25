import { router, publicProcedure, protectedProcedure } from '../trpc';
import getSlug from '@utils/slugify';
import { CommentSchema, PostSchema } from '@utils/schemas';

const SLUG_REGEX = /-(\d+)$/;

// TODO improve createPost.
export const postsRouter = router({
  createPost: protectedProcedure
    .input(PostSchema.omit({ score: true, slug: true }))
    .mutation(async ({ ctx, input }) => {
      let slug = getSlug(input.title);
      const [firstPost] = await ctx.prisma.post.findMany({
        where: {
          slug,
        },
        orderBy: {
          slug: 'desc',
        },
      });

      if (firstPost) {
        const match = firstPost.slug.match(SLUG_REGEX);

        slug = !match
          ? `${slug}-1`
          : slug.replace(SLUG_REGEX, `-${Number(match[0].slice(1)) + 1}`);
      }

      return await ctx.prisma.post.create({
        data: {
          ...input,
          score: 0,
          slug,
        },
      });
    }),
  getPost: publicProcedure.input(PostSchema.pick({ slug: true })).query(
    async ({ ctx, input }) =>
      await ctx.prisma.post.findFirst({
        where: {
          slug: input.slug,
        },
        select: {
          id: true,
          slug: true,
          title: true,
          body: true,
          score: true,
          user: {
            select: {
              login: true,
            },
          },
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          comments: {
            where: {
              parentId: null,
            },
            select: {
              id: true,
              body: true,
              user: {
                select: {
                  name: true,
                  email: true,
                  login: true,
                  image: true,
                },
              },
              Children: {
                select: {
                  parentId: true,
                  id: true,
                  body: true,
                  user: {
                    select: {
                      name: true,
                      email: true,
                      login: true,
                      image: true,
                    },
                  },
                },
              },
            },
          },
        },
      }),
  ),
  getPosts: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.post.findMany({
        select: {
          id: true,
          title: true,
          body: true,
          slug: true,
          category: {
            select: {
              name: true,
              slug: true,
            },
          },
          status: {
            select: {
              name: true,
              slug: true,
            },
          },
          score: true,
        },
      }),
  ),
  addComment: protectedProcedure.input(CommentSchema).mutation(
    async ({ ctx, input }) =>
      await ctx.prisma.comment.create({
        data: {
          parentId: input.parentId,
          body: input.body,
          userId: ctx.session.user.id,
          postId: input.postId,
        },
      }),
  ),
});
