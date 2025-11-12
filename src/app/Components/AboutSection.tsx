"use client";

import Image from "next/image";
import { FaCheckCircle, FaHandshake, FaCog, FaBolt, FaSmile } from "react-icons/fa";
import aboutImg from '@/assets/about-section.webp'
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Australia&apos;s <span className="text-px-orange underline decoration-px-orange/50">Trusted Device Buyers</span>
          </h2>
          <p className="mt-3 text-gray-600">
            At PhoneXpress, we make selling your mobile, iPad or tablet quick, safe and rewarding. 
            No hidden charges — just honest value and instant payouts.
          </p>
        </div> */}

        <SectionHeading 
        title="Australia's Trusted Device Buyers"
          subtitle="At PhoneXpress, we make selling your mobile, iPad or tablet quick, safe and rewarding. No hidden charges — just honest value and instant payouts."
        />

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <Image
              src={aboutImg}
              alt="About PhoneXpress"
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-xl font-medium mb-3 text-gray-900">About PhoneXpress</h3>
            <p className="text-gray-600 mb-4">
              PhoneXpress is an Australian-based company specializing in buying used smartphones, iPads, tablets and other smart devices. 
              Our mission is to offer honest prices, fast payments and a stress-free experience.
            </p>
            <p className="text-gray-600 mb-6">
              Backed by years of experience, we ensure every customer gets fair value and instant payout.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "Instant Payment",
                "Best Prices",
                "Free Pickup",
                "100% Secure",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#ff7a2d]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
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
    </section>
  );
}
