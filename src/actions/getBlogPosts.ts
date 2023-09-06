import { BLOG_URL } from "@/utils/utils";

type Params = { page?: number; query?: string; category?: number };

export async function getBlogPosts(params: Params) {
  const filteredParams = JSON.parse(JSON.stringify(params));
  const searchParams = new URLSearchParams(filteredParams);
  const result = await fetch(`${BLOG_URL}/posts?${searchParams}`, {
    next: { revalidate: 3600 },
  });
  return result.json();
}
