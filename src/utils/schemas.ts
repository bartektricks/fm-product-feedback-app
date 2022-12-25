import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.string(),
  categoryId: z.string(),
  statusId: z.string(),
  score: z.number(),
  slug: z.string(),
});

export const CommentSchema = z.object({
  parentId: z.string().or(z.null()),
  body: z.string().min(5).max(250),
  postId: z.string(),
});
