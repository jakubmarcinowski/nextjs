import BlogData from "./blog.json";

export const loadAPIData = () => {
  try {
    const { posts, categories } = BlogData;
    if (!posts || !categories) {
      throw new Error("Failed to load blog data");
    }
    return { posts, categories };
  } catch {
    throw new Error("Failed to connect to database");
  }
};
