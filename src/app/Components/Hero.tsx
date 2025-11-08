"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from '@/assets/hero-1.jpg'
import hero2 from '@/assets/hero-2-new.webp'
import hero3 from '@/assets/hero-3.jpg'

export default function Hero() {
  return (
    <main className="overflow-x-hidden pt-10 py-10">
      {/* HERO SECTION */}
      <section id="home" className="relative hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-80 sm:h-96 lg:h-128 rounded-2xl overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="relative w-full h-full">
                  {/* Background image */}
                  <Image
                    src={hero1}
                    alt="Instant Pay Xpress Way"
                    fill
                    className="object-cover brightness-75"
                    priority
                  />
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
                    
                    <h3 className="text-4xl sm:text-5xl font-bold mb-3">
                      Instant Pay Xpress Way
                    </h3>
                    <p className="text-lg max-w-xl">
                      Australia&apos;s most trusted device buyers — instant
                      payment, free pickup.
                    </p>
                    
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={hero2}
                    alt="Instant Payment"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
                    <h3 className="text-4xl sm:text-5xl font-bold mb-3">
                      Instant Payment
                    </h3>
                    <p className="text-lg max-w-xl">
                      Quick verification and immediate payout via bank transfer,
                      PayPal or cash.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image
                    src={hero3}
                    alt="Nationwide Service"
                    fill
                    className="object-cover brightness-75"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
                    <h3 className="text-4xl sm:text-5xl font-bold mb-3">
                      Nationwide Service
                    </h3>
                    <p className="text-lg max-w-xl">
                      We collect from your door — fast, secure, and insured.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
