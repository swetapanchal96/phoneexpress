// app/components/WhatWeBuy.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imgWhat from '@/assets/devices-mock.jpg'
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FaHeadphones, FaTabletAlt } from 'react-icons/fa';

export default function WhatWeBuy() {
  return (
    <section id="what-we-buy" className="py-20 bg-gray-50">
      {/* Local-only styles (no tailwind.config edits) */}
      <style jsx>{`
        .px-orange { color: #fb923c; }
        .bg-px-orange { background-color: #fb923c; }
        .text-px-orange { color: #fb923c; }
        .border-px-orange { border-color: #fb923c; }
        .icon-disc { transition: background-color 200ms ease, color 200ms ease, transform 200ms ease; }
        .item:hover .icon-disc { background-color: #fb923c; color: white; }
        .item { transition: transform 200ms ease; }
        .item:hover { transform: translateX(0.25rem); }
        .section-title { letter-spacing: -0.015em; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-1 section-title">
              What We Buy

            </h2>
            <div className="flex ml-12 mb-2">
              <div className="w-20 h-1 bg-[#ff7a2d] rounded-full"></div>
            </div>
            {/* <span className='border-2 p-2 rounded-2xl bg-[#ff7a2d]'></span> */}
            <p className="text-gray-600 mb-10">
              We buy all major brand devices — even used or damaged.
            </p>

            <div className="space-y-6 border-l-4 border-[#ff7a2d] pl-6">
              {/* Smartphones */}
              <div className="item group flex items-start gap-4 cursor-pointer">
                <div className="icon-disc w-12 h-12 rounded-full bg-orange-400/10 text-px-orange flex items-center justify-center text-xl">
                  <MdOutlinePhoneIphone className='w-5 h-5'/>
                </div>
                <div>
                  <h4 className="text-lg font-medium transition-colors group-hover:text-[#ff7a2d]">Smartphones</h4>
                  <p className="text-sm text-gray-500">iPhone, Samsung etc</p>
                </div>
              </div>

              {/* Tablets & iPads */}
              <div className="item group flex items-start gap-4 cursor-pointer">
                <div className="icon-disc w-12 h-12 rounded-full bg-orange-400/10 text-px-orange flex items-center justify-center text-xl">
                  {/* tablet icon */}
                  <FaTabletAlt className='w-5 h-5'/>
                </div>
                <div>
                  <h4 className="text-lg font-medium transition-colors group-hover:text-[#ff7a2d]">Tablets & iPads</h4>
                  <p className="text-sm text-gray-500">Apple iPad, Samsung Tab etc</p>
                </div>
              </div>

              {/* Smart Watches */}
              <div className="item group flex items-start gap-4 cursor-pointer">
                <div className="icon-disc w-12 h-12 rounded-full bg-orange-400/10 text-px-orange flex items-center justify-center text-xl">
                  {/* outline smartwatch (from your HTML) */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    role="img" aria-label="Smartwatch"
                    className="w-6 h-6" fill="none" stroke="currentColor"
                    strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 2.5h6" />
                    <path d="M9 21.5h6" />
                    <rect x="6.5" y="4.5" width="11" height="15" rx="2.2" ry="2.2" />
                    <rect x="9.2" y="7.2" width="5.6" height="9.6" rx="1" ry="1" />
                    <circle cx="17.6" cy="9.2" r="0.7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium transition-colors group-hover:text-[#ff7a2d]">Smart Watches</h4>
                  <p className="text-sm text-gray-500">Apple Watch</p>
                </div>
              </div>

              {/* Accessories */}
              <div className="item group flex items-start gap-4 cursor-pointer">
                <div className="icon-disc w-12 h-12 rounded-full bg-orange-400/10 text-px-orange flex items-center justify-center text-xl">
                  {/* headphones icon */}
                  
                  <FaHeadphones className='w-5 h-5' />
                </div>
                <div>
                  <h4 className="text-lg font-medium transition-colors group-hover:text-[#ff7a2d]">Accessories</h4>
                  <p className="text-sm text-gray-500">AirPods</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-orange-500 text-white font-medium shadow hover:shadow-md transition"
              >
                View All Devices
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-2xl shadow-lg overflow-hidden">
              {/* Replace src with your actual image path/public asset */}
              <Image
                src={imgWhat}
                alt="Devices"
                width={960}
                height={540}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
