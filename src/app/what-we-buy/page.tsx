"use client";

import React from "react";
import { FaMobileAlt, FaTabletAlt, FaHeadphones, FaArrowRight } from "react-icons/fa";
import { CgAppleWatch } from "react-icons/cg";
import Link from "next/link";
import Breadcrumb from "../Components/Breadcrumb";
import SectionHeading from "../Components/SectionHeading";


export default function WhatWeBuyPage() {
    return (
        <main className="bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb pageTitle="What We Buy" />

            {/* Content Section */}
            <section className="pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Heading */}
                    <SectionHeading
                        title="What We Buy"
                        subtitle="We Accept All Major Brands & Models — Working or Damaged"
                    />

                    {/* Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {/* Smartphones */}
                        <div className="group bg-white rounded-2xl shadow-sm border border-orange-100 p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="text-[#FF7A2D] text-5xl mb-4 flex justify-center">
                                <FaMobileAlt />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#FF7A2D] transition">
                                Smartphones
                            </h3>
                            <p className="text-gray-600 text-sm">
                                iPhones, Samsung, Oppo, Vivo, OnePlus, Google Pixel
                            </p>
                        </div>

                        {/* Tablets & iPads */}
                        <div className="group bg-white rounded-2xl shadow-sm border border-orange-100 p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="text-[#FF7A2D] text-5xl mb-4 flex justify-center">
                                <FaTabletAlt />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#FF7A2D] transition">
                                Tablets & iPads
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Apple iPad, Samsung Tab, Lenovo Tab
                            </p>
                        </div>

                        {/* Smart Watches */}
                        <div className="group bg-white rounded-2xl shadow-sm border border-orange-100 p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="text-[#FF7A2D] text-5xl mb-4 flex justify-center">
                                <CgAppleWatch />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#FF7A2D] transition">
                                Smart Watches
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Apple Watch, Samsung, Fitbit
                            </p>
                        </div>

                        {/* Accessories */}
                        <div className="group bg-white rounded-2xl shadow-sm border border-orange-100 p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                            <div className="text-[#FF7A2D] text-5xl mb-4 flex justify-center">
                                <FaHeadphones />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#FF7A2D] transition">
                                Accessories
                            </h3>
                            <p className="text-gray-600 text-sm">
                                AirPods, Chargers, and more
                            </p>
                        </div>
                    </div>


                    {/* <div className="mt-16">
            <p className="text-gray-700 mb-6 text-lg font-poppins">
              Not sure if we buy your device? Send us details to confirm!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF7A2D] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
            >
              Get a Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div> */}


                </div>
                {/* CTA Section */}
                <section className="mt-5 py-14 bg-linear-to-r from-[#FF7A2D] to-[#f97316] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-3xl font-semibold">
                                “Not sure if we buy your device? Send us details to confirm!”
                            </h3>

                        </div>

                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-[#FF7A2D] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
                        >
                            Get a Quote Now <FaArrowRight />
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}
