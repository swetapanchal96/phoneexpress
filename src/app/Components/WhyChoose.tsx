// app/components/WhyChoose.tsx
'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { FaClock, FaLock, FaTruck } from 'react-icons/fa';

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M7 10h3M14 14h3" />
      </svg>
    ),
    title: 'Instant Payment',
    desc: 'Get paid immediately after verification.',
  },
  {
    icon: <FaLock />,
    title: '100% Transparent',
    desc: 'No hidden fees or surprises.',
  },
  {
    icon:<FaClock />,
    title: 'Fast Evaluation',
    desc: 'Quick assessment and fair pricing.',
  },
  {
    icon: <FaTruck />,
    title: 'Nationwide Pickup',
    desc: 'Convenient collection across Australia.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Local styles only */}
      <style jsx>{`
        .border-px-orange { border-color: #fb923c; }
        .hover-border-px-orange:hover { border-color: #fb923c; }
        .section-title { letter-spacing: -0.015em; }
        .icon-wrap { background-image: linear-gradient(to right, #fb923c, #ea580c); }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <h2 className="text-3xl font-semibold mb-4 section-title">
          Why Australians Choose PhoneXpress
        </h2>
        <p className="text-gray-600 mb-12">Trusted by thousands across the country</p> */}

          <SectionHeading 
          title="Why Australians Choose PhoneXpress"
          subtitle="Trusted by thousands across the country"
          />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className={[
                'group bg-white p-8 rounded-2xl shadow-md border border-transparent',
                'transition transform duration-200 ease-out',
                'hover:shadow-xl hover:-translate-y-1 hover-border-px-orange',
              ].join(' ')}
            >
              <div
                className={[
                  'w-16 h-16 mx-auto rounded-full text-white flex items-center justify-center text-3xl mb-4',
                  'transition-transform duration-200 ease-out group-hover:scale-110',
                  'icon-wrap',
                ].join(' ')}
              >
                {f.icon}
              </div>
              <h4 className="font-semibold mb-2 transition-colors duration-200 group-hover:text-orange-600">
                {f.title}
              </h4>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
