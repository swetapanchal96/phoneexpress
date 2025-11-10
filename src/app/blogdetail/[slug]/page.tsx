import axios from "axios";
import BlogDetailClient from "./BlogDetailClient";
import { apiUrl } from "@/config";

export async function generateStaticParams() {
  try {
    // ✅ use POST if API does not support GET
    const res = await axios.post(`${apiUrl}/blogs`);
    const blogs = res?.data?.data || [];

    return blogs.map((b: any) => ({
      slug: b.slugname, // Adjust based on your API field
    }));
  } catch (err) {
    console.error("Error generating static params:", err);
    return []; // Return empty so build doesn't crash
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;

  // console.log("Resolved params:", resolvedParams); 

  
  return <BlogDetailClient slug={resolvedParams.slug} />;
}