"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "../Components/SectionHeading";
import { FaBolt, FaCog, FaHandshake, FaSmile } from "react-icons/fa";
import aboutImg from '@/assets/about-img.png'
import Breadcrumb from "../Components/Breadcrumb";


export default function AboutPage() {
  return (
    <section>
        <Breadcrumb pageTitle="About Us" />
    <main className="bg-gray-50 max-w-6xl mx-auto">
      {/* ABOUT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
          <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={aboutImg}
              alt="About PhoneXpress"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Right Content */}
          <div>
            <SectionHeading
              title="About PhoneXpress"
              subtitle="Your Trusted Partner for Hassle-Free Device Selling"
            />

            <p className="text-gray-600 leading-relaxed mb-6">
              PhoneXpress is an Australian-based company specializing in buying
              used smartphones, iPads, tablets, and other smart devices. Our
              mission is to offer honest prices, fast payments, and a
              stress-free experience for every customer.
            </p>

            <div className="bg-white border border-orange-100 shadow-md rounded-2xl p-6 mt-6">
              <p className="text-gray-700 italic">
                “Backed by years of experience in the mobile industry,
                PhoneXpress ensures every customer gets fair value and instant
                payout.”
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* OUR VISION & VALUES SECTION */}
      <section className="py-20 bg-white border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Vision"
            // subtitle="To make selling used devices simple, transparent, and rewarding."
          />

          <div className="max-w-3xl mx-auto bg-linear-to-r from-orange-50 to-orange-100 border border-orange-200 shadow-md rounded-2xl p-8 text-center transition transform hover:-translate-y-1 hover:shadow-xl">
            <p className="text-gray-700 text-lg">
              To make selling used devices simple, transparent, and rewarding.
            </p>
          </div>

          <div className="mt-20">
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide how we serve our customers every day."
            />

            {/* Values Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {[
                { icon: "🤝", title: "Trust", text: "Transparency first." },
                { icon: "⚙️", title: "Simplicity", text: "Ease at every step." },
                { icon: "⚡", title: "Speed", text: "Fast payments always." },
                { icon: "😊", title: "Satisfaction", text: "Happy customers." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-gray-50 p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 text-[#FF7A2D] flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900 group-hover:text-[#FF7A2D] transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div> */}

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { icon: <FaHandshake />, title: "Trust", desc: "Building lasting relationships through transparency." },
                        { icon: <FaCog />, title: "Simplicity", desc: "Making the selling process as easy as possible." },
                        { icon: <FaBolt />, title: "Speed", desc: "Quick evaluations and instant payments." },
                        { icon: <FaSmile />, title: "Satisfaction", desc: "Ensuring every customer is happy with our service." },
                      ].map((card) => (
                        <div
                          key={card.title}
                          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-[#ff7a2d]"
                        >
                          <div className="text-[#FF7A2D] text-5xl mb-3">{card.icon}</div>
                          <h4 className="font-medium mb-2">{card.title}</h4>
                          <p className="text-gray-600 text-sm">{card.desc}</p>
                        </div>
                      ))}
                    </div>
          </div>
        </div>
      </section>
    </main>
    </section>
  );
}
