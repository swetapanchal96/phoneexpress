"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../Components/Breadcrumb";
import blog1 from '@/assets/devices-mock.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    date: string;

    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How to Get the Best Value for Your Used Phone",
        excerpt:
            "Learn expert tips on how to evaluate and sell your smartphone for the highest resale value in India.",
        image: blog1.src,
        date: "October 25, 2025",

        slug: "get-best-value-used-phone"
    },
    {
        id: 2,
        title: "The Environmental Impact of E-Waste & Recycling",
        excerpt:
            "Discover how responsible e-waste recycling helps protect the environment and promote sustainability.",
        image: "/images/blog2.jpg",
        date: "October 18, 2025",

        slug: "environmental-impact-ewaste"

    },
    {
        id: 3,
        title: "Top 5 Mistakes to Avoid When Selling Your Old Phone",
        excerpt:
            "Avoid these common errors that could reduce your phone’s value or delay your payment process.",
        image: "/images/blog3.jpg",
        date: "September 29, 2025",

        slug: "mistakes-when-selling-phone"

    },
];

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPosts = blogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="bg-gray-50 min-h-screen">
            <Breadcrumb pageTitle="Blog" />



            {/* Blog Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative w-full h-52">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </Link>
                            <div className="p-5">
                                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                                    <span>{post.date}</span>
                                </div>
                                <Link href={`/blog/${post.slug}`}>
                                    <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-gray-600 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                                {/* Read More Button */}
                                <div className="mt-4">
                                    <Link
                                        href={`/blog/${post.slug}`}
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


        </main>
    );
}
