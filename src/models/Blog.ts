export type BlogPostSchema = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
};

export type CategorySchema = { id: number; name: string; slug: string };
