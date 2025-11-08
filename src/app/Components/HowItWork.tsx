// app/components/HowItWorks.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';

const steps = [
  { n: 1, title: 'Submit Details', desc: 'Provide brand, model & condition' },
  { n: 2, title: 'Get Quote', desc: 'Receive a fair market price instantly' },
  { n: 3, title: 'Approve Offer', desc: 'Confirm and we arrange everything' },
  { n: 4, title: 'Hand Over Device', desc: 'Ship or use our pickup service' },
  { n: 5, title: 'Get Paid', desc: 'Instant payment after verification' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <style jsx>{`
        .hover-px-orange:hover { border-color: #fb923c; }
        @keyframes card-wiggle-once {
          0% { transform: translateY(-0.25rem) translateX(0) rotate(0deg); }
          20% { transform: translateY(-0.25rem) translateX(1px) rotate(0.15deg); }
          40% { transform: translateY(-0.25rem) translateX(-1px) rotate(-0.15deg); }
          60% { transform: translateY(-0.25rem) translateX(1px) rotate(0.1deg); }
          80% { transform: translateY(-0.25rem) translateX(-1px) rotate(-0.1deg); }
          100% { transform: translateY(-0.25rem) translateX(0) rotate(0deg); }
        }
        .hover-wiggle:hover { animation: card-wiggle-once 220ms ease-out 1; }
        .title-tight { letter-spacing: -0.015em; }
        .font-smooth { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-smooth">
        {/* <h2 className="text-3xl font-semibold mb-3 title-tight">
          Selling Your Device Has Never Been Easier
        </h2>
        <p className="text-gray-600 mb-12">Simple steps. Instant cash.</p> */}

        <SectionHeading 
        title="Selling Your Device Has Never Been Easier"
          subtitle="Simple steps. Instant cash."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div
              key={s.n}
              className={[
                'group bg-white p-8 rounded-2xl shadow-md border border-transparent',
                'transition duration-200 ease-out transform will-change-transform',
                'hover:shadow-xl hover:-translate-y-1 hover-px-orange hover-wiggle',
              ].join(' ')}
            >
              <div
                className={[
                  'w-16 h-16 mx-auto rounded-full',
                  'bg-linear-to-r from-orange-400 to-orange-600',
                  'text-white flex items-center justify-center',
                  'text-xl font-semibold mb-4',
                  'transition-transform duration-200 ease-out group-hover:scale-110',
                ].join(' ')}
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

        <div className="mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-medium shadow-lg transition duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            Start Now
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
    </section>
  );
}
