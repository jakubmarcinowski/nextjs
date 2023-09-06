import { BLOG_URL } from "@/utils/utils";

export async function getCategoriesData() {
  const result = await fetch(`${BLOG_URL}/categories`);
  return result.json();
}
