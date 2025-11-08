"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "../Components/SectionHeading";
import Breadcrumb from "../Components/Breadcrumb";
import { FaLock, FaIdCard, FaBoxOpen } from "react-icons/fa";

const steps = [
  { n: 1, title: "Submit Details", desc: "Provide brand, model & condition" },
  { n: 2, title: "Get Quote", desc: "Receive a fair market price instantly" },
  { n: 3, title: "Approve Offer", desc: "Confirm and we arrange everything" },
  { n: 4, title: "Hand Over Device", desc: "Ship or use our pickup service" },
  { n: 5, title: "Get Paid", desc: "Instant payment after verification" },
];

export default function HowItWorks() {
  return (
    <div>
      <Breadcrumb pageTitle="How It Works" />

      <section id="how-it-works" className="pt-20 bg-white">
        <style jsx>{`
          .hover-px-orange:hover {
            border-color: #fb923c;
          }
          @keyframes card-wiggle-once {
            0% {
              transform: translateY(-0.25rem) translateX(0) rotate(0deg);
            }
            20% {
              transform: translateY(-0.25rem) translateX(1px) rotate(0.15deg);
            }
            40% {
              transform: translateY(-0.25rem) translateX(-1px) rotate(-0.15deg);
            }
            60% {
              transform: translateY(-0.25rem) translateX(1px) rotate(0.1deg);
            }
            80% {
              transform: translateY(-0.25rem) translateX(-1px) rotate(-0.1deg);
            }
            100% {
              transform: translateY(-0.25rem) translateX(0) rotate(0deg);
            }
          }
          .hover-wiggle:hover {
            animation: card-wiggle-once 220ms ease-out 1;
          }
          .title-tight {
            letter-spacing: -0.015em;
          }
          .font-smooth {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>

        <SectionHeading
          title="How PhoneXpress Works"
          subtitle="Simple Steps. Instant Cash."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-smooth">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div
                key={s.n}
                className={[
                  "group bg-white p-8 rounded-2xl shadow-md border border-transparent",
                  "transition duration-200 ease-out transform will-change-transform",
                  "hover:shadow-xl hover:-translate-y-1 hover-px-orange hover-wiggle",
                ].join(" ")}
              >
                <div
                  className={[
                    "w-16 h-16 mx-auto rounded-full",
                    "bg-linear-to-r from-orange-400 to-orange-600",
                    "text-white flex items-center justify-center",
                    "text-xl font-semibold mb-4",
                    "transition-transform duration-200 ease-out group-hover:scale-110",
                  ].join(" ")}
                >
                  {s.n}
                </div>
                <h4 className="font-semibold mb-2 transition-colors duration-200 group-hover:text-orange-600">
                  {s.title}
                </h4>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== QUICK TIPS SECTION ===== */}
        <div className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Quick <span className="text-[#FF7A2D]">Tips</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {/* Tip 1 */}
            <div className="group bg-orange-50 rounded-2xl border border-orange-200 p-6 hover:bg-[#FF7A2D] hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center text-4xl mb-3 text-[#FF7A2D] group-hover:text-white transition">
                <FaLock />
              </div>
              <h4 className="font-semibold mb-2">Erase Your Data</h4>
              <p className="text-sm opacity-80">
                Remove personal info before handing over.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="group bg-orange-50 rounded-2xl border border-orange-200 p-6 hover:bg-[#FF7A2D] hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center text-4xl mb-3 text-[#FF7A2D] group-hover:text-white transition">
                <FaIdCard />
              </div>
              <h4 className="font-semibold mb-2">Keep ID Proof Ready</h4>
              <p className="text-sm opacity-80">
                A photo ID may be needed for verification.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="group bg-orange-50 rounded-2xl border border-orange-200 p-6 hover:bg-[#FF7A2D] hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="flex justify-center text-4xl mb-3 text-[#FF7A2D] group-hover:text-white transition">
                <FaBoxOpen />
              </div>
              <h4 className="font-semibold mb-2">Pack Securely</h4>
              <p className="text-sm opacity-80">
                Protect your device during handover or shipping.
              </p>
            </div>
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="mt-20 bg-linear-to-r from-[#FF7A2D] to-orange-500 text-white py-14">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-3xl font-bold mb-2 font-playfair">
                Turn your device into instant cash with PhoneXpress.
              </h3>
              
                
              
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-[#FF7A2D] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Sell My Device Now
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
          </div>
        </div>
      </section>
    </div>
  );
}
