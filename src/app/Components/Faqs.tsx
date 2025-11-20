// app/components/Faqs.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import faq from '@/assets/faq.png'
import { FaTruck, FaIdCard, FaBoxes } from "react-icons/fa";
import { MdPhoneAndroid, MdPaid } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import axios from 'axios';
import { apiUrl } from '@/config';

// const faqs = [
//   {
//     icon: (
//       <MdPhoneAndroid className='w-5 h-5'/>
//     ),
//     q: 'Do you buy damaged or broken phones?',
//     a: 'Yes, we buy phones in all conditions — from brand new to broken. Just provide accurate details.',
//   },
//   {
//     icon: (
//       <MdPaid className='w-5 h-5'/>
//     ),
//     q: 'How will I get paid?',
//     a: 'Bank transfer, or instant cash  after verification.',
//   },
//   {
//     icon: (
//       <FaTruck className='w-5 h-5'/>
//     ),
//     q: 'Do you offer device pickup?',
//     a: 'Yes — we offer convenient nationwide doorstep pickup.',
//   },
//   {
//     icon: (
//       <FaIdCard className='w-5 h-5'/>
//     ),
//     q: 'What documents are required?',
//     a: 'A valid photo ID.',
//   },
//   {
//     icon: (
//       <FaBoxes className='w-5 h-5'/>
//     ),
//     q: 'Can I sell multiple devices at once?',
//     a: 'Absolutely — just list all devices when requesting a quote.',
//   },
// ];

interface FaqItem {
  faqid: number;
  question: string;
  answer: string;
}


export default function Faqs() {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqs =async () => {
      try {
        const response = await axios.post(`${apiUrl}/faqlist`)
        if(response.data.success && Array.isArray(response.data.data)) {
          setFaqs(response.data.data)
        } else {
          setError("Failed to load FAQs");
        }
      } catch (err) {
        setError("Something went wrong while fetching FAQs.")
      } finally {
        setLoading(false)
      }
    };

    fetchFaqs()
  },[])

  return (
    <section id="faqs" className="py-16 bg-white">
      {/* Scoped helpers only */}
      <style jsx>{`
        .section-title { letter-spacing: -0.015em; }
        .border-px-orange { border-color: #fb923c; }
        .border-px-orange-60 { border-color: rgba(251, 146, 60, 0.6); }
        .grad-orange { background-image: linear-gradient(to right, #fb923c, #ea580c); }
        /* details / summary reset to allow flex + hover */
        details > summary::-webkit-details-marker { display: none; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src={faq}
            alt="Support"
            width={640}
            height={640}
            className="w-full max-w-sm md:max-w-md object-contain rounded-3xl shadow-lg"
            priority
          />
        </div>

        {/* Right FAQs */}
        <div>
          <h2 className="text-3xl font-semibold section-title mb-3">Frequently Asked Questions</h2>
          <div className="flex ml-37 mb-2">
              <div className="w-20 h-1 bg-[#ff7a2d] rounded-full"></div>
            </div>
          <p className="text-gray-600 mb-6">Got questions? We've got straight answers.</p>

          {/* Loading state */}
          {loading && (
            <p className="text-gray-500 text-center py-10">Loading FAQs...</p>
          )}

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-center py-10">{error}</p>
          )}
          {
            !loading && !error && faqs.length > 0 ? (
              <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.faqid}
                className="group border border-px-orange-60 rounded-2xl bg-white overflow-hidden transition-all open:border-px-orange"
              >
                <summary className="flex items-center justify-between cursor-pointer font-medium px-5 py-5 text-gray-800 transition-all open:text-white open:grad-orange">
                  <span className="flex items-center gap-3">
                    {/* <span className="text-[#fb923c] group-open:text-white">{f.icon}</span> */}
                    <FaTelegramPlane className="text-[#fb923c] group-open:text-white w-5 h-5" />{f.question}
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform open:rotate-180 group-open:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-3 text-gray-600 open:text-white open:grad-orange">
                  
                  {f.answer}
                </div>
              </details>
            ))}
          </div>
            ) : (
              !loading && !error && (
                <p className='text-gray-500 text-center py-10'>No FAQs found.</p>
              )
            )
          }
          

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fb923c] text-white font-medium shadow"
            >
              Contact Us
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
      </div>
    </section>
  );
}
