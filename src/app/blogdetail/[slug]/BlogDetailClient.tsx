"use client"
import { apiUrl } from "@/config";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogData {
  blogId: number;
  blogTitle: string;
  slugname: string;
  blogDescription: string;
  blogImage: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  head?: string;
}

export default function BlogDetailPage({ slug }: { slug: string }) {
//   const { slug } = useParams();
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
    console.log(slug,"sluggggg");
    
  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await axios.post(`${apiUrl}/blog/details`,
          { slugname: slug }
        );
        
        setBlog(res.data.data)
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false)
      }
    };

    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-gray-500 animate-pulse">Loading blog details...</p>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-red-500 font-semibold">
          Blog not found or failed to load.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Home › Blog › {blog.blogTitle}
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {blog.blogTitle}
      </h1>

      {/* Author and Date */}
      <p className="text-gray-500 text-sm mb-6">
        {/* {new Date(post.date).toLocaleDateString("en-GB") } */}
      </p>

      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-100 mb-10 rounded-lg overflow-hidden shadow-sm flex justify-start">
        <Image
          src={blog.blogImage}
          alt={blog.blogTitle}
          fill
          unoptimized
          className="object-contain "
          priority
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none text-gray-700" 
      dangerouslySetInnerHTML={{__html: blog.blogDescription }}
      />
        
    </main>
  );
}
