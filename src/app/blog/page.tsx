"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../Components/Breadcrumb";
import blog1 from '@/assets/devices-mock.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { apiUrl } from "@/config";

interface BlogPost {
  blogId: number;
  blogTitle: string;
  slugname: string;
  blogDescription: string;
  blogImage: string;
  date: string;
}

// const blogPosts: BlogPost[] = [
//     {
//         id: 1,
//         title: "How to Get the Best Value for Your Used Phone",
//         excerpt:
//             "Learn expert tips on how to evaluate and sell your smartphone for the highest resale value in India.",
//         image: blog1.src,
//         date: "October 25, 2025",

//         slug: "get-best-value-used-phone"
//     },
//     {
//         id: 2,
//         title: "The Environmental Impact of E-Waste & Recycling",
//         excerpt:
//             "Discover how responsible e-waste recycling helps protect the environment and promote sustainability.",
//         image: "/images/blog2.jpg",
//         date: "October 18, 2025",

//         slug: "environmental-impact-ewaste"

//     },
//     {
//         id: 3,
//         title: "Top 5 Mistakes to Avoid When Selling Your Old Phone",
//         excerpt:
//             "Avoid these common errors that could reduce your phone’s value or delay your payment process.",
//         image: "/images/blog3.jpg",
//         date: "September 29, 2025",

//         slug: "mistakes-when-selling-phone"

//     },
// ];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${apiUrl}/blogs`)
        if (response.data.success && Array.isArray(response.data.data)) {
          setBlogs(response.data.data)
        } else {
          setError("Failed to load blogs.")
        }
      } catch (err) {
        setError("Something went wrong while fetching blogs.")
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs()
  }, [])

  const filteredPosts = blogs.filter((post) =>
    post.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + blogsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Breadcrumb pageTitle="Blog" />

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20 text-gray-600 text-lg">
          Loading blogs...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center py-20 text-red-500 text-lg">
          {error}
        </div>
      )}

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              key={post.blogId}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
            >
              <Link href={`/blogdetail/${post.slugname}`}>
                <div className="relative w-full h-52">
                  <Image
                    src={post.blogImage}
                    alt={post.blogTitle}
                    fill

                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }).replace(/ /g, "-")}

                  </span>
                </div>
                <Link href={`/blogdetail/${post.slugname}`}>
                  <h2 className="text-lg font-semibold text-gray-900 hover:text-[#ff7a2d] transition line-clamp-2">
                    {post.blogTitle}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.blogDescription.substring(0, 150) + "..." }}
                />

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    href={`/blogdetail/${post.slugname}`}
                    className="inline-flex items-center gap-2 text-orange-500 border border-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white transition"
                  >
                    Read More <FaArrowRightLong className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full mt-10">
            No articles found matching your search.
          </p>
        )}
      </section>

      {/* Pagination Section */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 mb-16">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-orange-500 border-orange-400 hover:bg-orange-50"
              } transition`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-md border transition ${currentPage === index + 1
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 hover:bg-orange-100 border-gray-300"
                }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-orange-500 border-orange-400 hover:bg-orange-50"
              } transition`}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
