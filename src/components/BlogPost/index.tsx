import Link from "next/link";
import Image from "next/image";
import { BlogPostSchema, CategorySchema } from "@/models/Blog";

type BlogPostProps = BlogPostSchema & { categoriesData: CategorySchema[] };

export const BlogPost = ({
  slug,
  title,
  excerpt,
  imageUrl,
  categories,
  categoriesData,
}: BlogPostProps) => (
  <article className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-transform lg:hover:-translate-y-2.5">
    <div className="relative h-64 w-full">
      <Image
        className="object-cover"
        src={imageUrl}
        fill
        alt={`${title} image`}
      />
    </div>
    <div className="flex h-[280px] w-full max-w-xl flex-col justify-between gap-4 p-5">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          {categories.map((category) => {
            const { slug: categorySlug, name } = categoriesData.find(
              (item) => item.id === category,
            ) as CategorySchema;

            return (
              <Link
                href={categorySlug}
                className="text-sm font-medium text-primary-600"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <h3 className="line-clamp-2 text-xl font-bold text-secondary-950">
          <Link href={slug}>{title}</Link>
        </h3>
      </div>
      <p className="line-clamp-3 text-secondary">{excerpt}</p>
      <div className="flex gap-4 align-middle">
        <Image
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-full w-12 rounded-full"
          width={48}
          loading="lazy"
          height={48}
          alt="author image"
        />
        <figcaption className="flex flex-col justify-center">
          <header className="text-sm font-semibold text-secondary-950">
            Roul Aufdehger
          </header>
          <time className="text-sm text-secondary">
            Mar 16, 2020 &#x2022; 6 min read
          </time>
        </figcaption>
      </div>
    </div>
  </article>
);

export default BlogPost;
