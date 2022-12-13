import slugify from 'slugify';

export default function getSlug(text: string) {
  return slugify(text, { lower: true, trim: true });
}
