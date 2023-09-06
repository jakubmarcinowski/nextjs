import { NextRequest } from "next/server";
import { loadAPIData } from "../setup";

const limit = 3;

export async function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.searchParams);
  const page = parseInt(searchParams.get("page") || "0");
  const query = searchParams.get("query") || "";
  const category = parseInt(searchParams.get("category") || "0");

  try {
    const result = getPosts(page, query, category, limit);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch {
    return new Response("Failed to load posts", {
      status: 400,
    });
  }
}

const getPosts = (
  page: number,
  query: string,
  category: number,
  limit: number,
) => {
  const { posts } = loadAPIData();

  const validatedPage = page > 0 ? page : 1;
  const startIdx = (validatedPage - 1) * limit;
  const endIdx = validatedPage * limit;

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = post.categories.includes(category) || category === 0;
    const titleMatch =
      post.title.toLowerCase().includes(query.toLowerCase()) || query === "";
    return categoryMatch && titleMatch;
  });

  const maxPage = Math.floor(filteredPosts.length / limit);
  const data = filteredPosts.slice(startIdx, endIdx);

  return { posts: data, pages: maxPage };
};
