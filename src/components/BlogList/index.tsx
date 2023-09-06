import { BlogPostSchema, CategorySchema } from "@/models/Blog";
import BlogPost from "@/components/BlogPost";

export const BlogList = async ({
  categoriesData,
  posts,
}: {
  categoriesData: CategorySchema[];
  posts: BlogPostSchema[];
}) => (
  <div className="mx-auto mt-12 grid gap-x-8 gap-y-20 lg:grid-cols-3">
    {posts.map((post: BlogPostSchema, idx: number) => (
      <BlogPost key={idx} {...post} categoriesData={categoriesData} />
    ))}
  </div>
);

export default BlogList;
