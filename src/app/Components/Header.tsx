"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "@/assets/logo.webp"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="PhoneXpress"
              width={90}
              height={80}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-px-dark">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-px-dark">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-px-dark flex items-center gap-2">
                Services <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 mt-4 w-44 bg-white  rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all">
                <Link href="/what-we-buy" className="block px-4 py-3 text-sm hover:bg-[#ff7a2d] hover:text-[#ffffff] rounded-xl font-normal">
                  What We Buy
                </Link>
                <Link href="/how-its-work" className="block px-4 py-3 text-sm hover:bg-[#ff7a2d] hover:text-[#ffffff] rounded-xl font-normal">
                  How It Works
                </Link>
                {/* <Link href="#contact" className="block px-4 py-2 text-sm hover:bg-gray-50">
                  Get Quote
                </Link> */}
              </div>
            </div>

            <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-px-dark">
              FAQs
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-px-dark">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-px-dark">
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff7a2d] text-white text-sm font-medium shadow hover:bg-orange-600 transition"
            >
              Get a Quote
            </Link>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 focus:ring-2 focus:ring-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12" // close icon
                      : "M4 6h16M4 12h16M4 18h16" // hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            <Link href="#home" className="block">
              Home
            </Link>
            <Link href="#about" className="block">
              About
            </Link>
            <Link href="#what-we-buy" className="block">
              What We Buy
            </Link>
            <Link href="#how-it-works" className="block">
              How It Works
            </Link>
            <Link href="#faqs" className="block">
              FAQs
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
