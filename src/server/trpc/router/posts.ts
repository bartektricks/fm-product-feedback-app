import { z } from 'zod';
import type { Post } from '@prisma/client';
import type { Context } from '../context';
import { router, publicProcedure, protectedProcedure } from '../trpc';
import getSlug from '@utils/slugify';

const SLUG_REGEX = /-(\d+)$/;

const PostSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.string(),
  categoryId: z.string(),
  statusId: z.string(),
  score: z.number(),
  slug: z.string(),
});

const findExistingPost = (prisma: Context['prisma'], slug: Post['slug']) => {
  return prisma.post.findMany({
    where: {
      slug,
    },
    orderBy: {
      slug: 'desc',
    },
  });
};

// TODO improve createPost.
export const postsRouter = router({
  createPost: protectedProcedure
    .input(PostSchema.omit({ score: true, slug: true }))
    .mutation(async ({ ctx, input }) => {
      let slug = getSlug(input.title);
      const [firstPost] = await findExistingPost(ctx.prisma, slug);

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
  getPosts: publicProcedure.query(
    async ({ ctx }) =>
      await ctx.prisma.post.findMany({
        select: {
          id: true,
          title: true,
          body: true,
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
});
