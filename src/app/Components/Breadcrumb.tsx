"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  pageTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageTitle }) => {
  const pathname = usePathname();

  return (
    <section className="relative bg-linear-to-r from-orange-200 via-orange-150 via-orange-100 to-white py-10 md:py-14 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-playfair">
            {pageTitle}
          </h1>

          {/* Breadcrumb trail */}
          <nav
            className="flex justify-center items-center text-sm text-gray-600 space-x-2 font-poppins"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#FF7A2D] transition">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#FF7A2D] font-medium">
              {pageTitle}
            </span>
          </nav>
        </div>
      </div>

      {/* Optional subtle underline accent */}
      <div className="absolute left-1/2 bottom-0 w-20 h-[3px] bg-[#FF7A2D] -translate-x-1/2 rounded-full"></div>
    </section>
  );
};

export default Breadcrumb;
