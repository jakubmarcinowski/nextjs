import { Suspense } from "react";
import BlogList from "@/components/BlogList";
import BlogListSkeleton from "@/components/BlogList/BlogListSkeleton";
import {
  SearchParams,
  getCategoryParams,
  getPageParams,
  getQueryParams,
} from "@/utils/getParams";
import { getBlogPosts, getCategoriesData } from "@/actions";
import { CategoriesProvider } from "@/context/categories";
import Search from "@/components/Search";
import Navigation from "@/components/Navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const categoriesData = await getCategoriesData();
  const pageParam = getPageParams(searchParams);
  const searchParam = getQueryParams(searchParams);
  const categoryParam = getCategoryParams(searchParams);
  const { posts, pages } = await getBlogPosts({
    page: pageParam,
    query: searchParam,
    category: categoryParam,
  });

  return (
    <CategoriesProvider categories={categoriesData}>
      <main className="mx-auto h-screen max-w-7xl py-24 md:py-32">
        <div className="px-6 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-secondary-950">
              From the blog
            </h1>
            <p className="mt-4 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ac nunc urna. Cras ut placerat nulla, nec varius arcu. Mauris
              auctor pulvinar turpis in egestas.
            </p>
          </div>
          <Search categoryParam={categoryParam} searchParam={searchParam} />
          <Suspense fallback={<BlogListSkeleton />}>
            <BlogList posts={posts} categoriesData={categoriesData} />
          </Suspense>
          <Navigation
            categoryParam={categoryParam}
            searchParam={searchParam}
            pageParam={pageParam}
            pages={pages}
          />
        </div>
      </main>
    </CategoriesProvider>
  );
}
