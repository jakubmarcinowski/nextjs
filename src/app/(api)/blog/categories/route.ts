import { loadAPIData } from "../setup";

export async function GET() {
  try {
    const { categories } = loadAPIData();
    return new Response(JSON.stringify(categories), {
      status: 200,
    });
  } catch {
    return new Response("Failed to load categories", {
      status: 400,
    });
  }
}
