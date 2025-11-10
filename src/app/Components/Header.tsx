"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from "@/assets/logo.webp";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // 👈 to get current active path

  const linkClasses = (path: string) =>
    `text-sm font-medium transition ${pathname === path ? "text-[#ff7a2d]" : "text-gray-700 hover:text-[#ff7a2d]"
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
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
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`text-sm font-medium flex items-center gap-2 transition ${pathname === "/what-we-buy" || pathname === "/how-its-work"
                  ? "text-[#ff7a2d]"
                  : "text-gray-700 hover:text-[#ff7a2d]"
                  }`}
              >
                Services <FaChevronDown className="text-xs" />
              </button>
              <div className="absolute left-0 mt-4 w-44 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all">
                <Link
                  href="/what-we-buy"
                  className={`block px-4 py-3 text-sm rounded-xl font-normal transition ${pathname === "/what-we-buy"
                    ? "bg-[#ff7a2d] text-white"
                    : "hover:bg-[#ff7a2d] hover:text-white"
                    }`}
                >
                  What We Buy
                </Link>
                <Link
                  href="/how-its-work"
                  className={`block px-4 py-3 text-sm rounded-xl font-normal transition ${pathname === "/how-its-work"
                    ? "bg-[#ff7a2d] text-white"
                    : "hover:bg-[#ff7a2d] hover:text-white"
                    }`}
                >
                  How It Works
                </Link>
              </div>
            </div>

            <Link href="/faq" className={linkClasses("/faq")}>
              FAQs
            </Link>
            <Link href="/blog" className={linkClasses("/blog")}>
              Blog
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
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
            <Link href="/" onClick={() => setMobileOpen(false)} className={`${linkClasses("/")} block `}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className={`${linkClasses("/about")} block `}>
              About
            </Link>
            {/* SERVICES DROPDOWN */}
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer  text-gray-700 ">
                <span className="flex items-center gap-2">
                  Services
                </span>
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  href="/what-we-buy"
                  onClick={() => setMobileOpen(false)}
                  className={`${linkClasses("/what-we-buy")} block text-sm text-gray-600 py-1`}
                >
                  What We Buy
                </Link>
                <Link
                  href="/how-its-work"
                  onClick={() => setMobileOpen(false)}
                  className={`${linkClasses("/how-its-work")} block text-sm text-gray-600 py-1`}
                >
                  How It Works
                </Link>
              </div>
            </details>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className={`${linkClasses("/faq")} block `}>
              FAQs
            </Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className={`${linkClasses("/blog")} block `}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className={`${linkClasses("/contact")} block `}>
              Contact
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
