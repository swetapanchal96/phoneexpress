import BlogDetailClient from "./BlogDetailClient";
import { apiUrl } from "@/config";

export async function generateStaticParams() {
  try {
    const res = await fetch(`${apiUrl}/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
      cache: "no-store", // or remove if API supports caching
    });

    const json = await res.json();
    const blogs = json?.data || [];

    return blogs.map((b: any) => ({
      slug: b.slugname,
    }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  return <BlogDetailClient slug={params.slug} />;
}
