// app/components/Testimonials.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from './SectionHeading';
import { FaCheckCircle } from 'react-icons/fa';

type T = { initials: string; name: string; city: string; text: string };

const items: T[] = [
  {
    initials: 'SM',
    name: 'Sarah M.',
    city: 'Sydney',
    text:
      'I sold my old iPhone and got paid instantly. The process was so simple and hassle-free. Highly recommend PhoneXpress!',
  },
  {
    initials: 'SM',
    name: 'James T.',
    city: 'Melbourne',
    text:
      'Best price offered for my broken Samsung. They arranged pickup from my home. Excellent service!',
  },
  {
    initials: 'SM',
    name: 'Emily R.',
    city: 'Brisbane',
    text:
      'Sold multiple devices at once and got a great deal. The team was professional and payment was immediate.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Scoped helpers only */}
      <style jsx>{`
        .section-title { letter-spacing: -0.015em; }
        .border-px-orange { border-color: #fb923c; }
        .grad-disc { background-image: linear-gradient(to right, #fb923c, #ea580c); }
        /* Swiper pagination color tweak to match orange */
        :global(.swiper-pagination-bullet) {
          background: #fecba1;
          opacity: 1;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #fb923c;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* <h2 className="text-3xl font-semibold section-title mb-12">
          What Our Happy Sellers Say
        </h2> */}
        <SectionHeading 
        title="What Our Happy Sellers Say"
        />

        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="pb-8!"
        >
          {items.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="bg-white p-8 rounded-2xl border border-px-orange hover:border-gray-200 shadow-sm hover:shadow-lg transition max-w-md mx-auto text-left">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full grad-disc text-white flex items-center justify-center font-semibold text-lg">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.city}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">"{t.text}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-linear-to-r from-orange-500 to-orange-600 text-white shadow">
            <FaCheckCircle />
            Verified Business
          </span>
        </div>
      </div>
    </section>
  );
}
