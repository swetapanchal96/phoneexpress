"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from '@/assets/hero-1-new.webp'
import hero2 from '@/assets/hero-2-new.webp'
import hero3 from '@/assets/hero-3.jpg'
// import { LuSmartphone } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { FaMoneyBillWave, FaTruck } from "react-icons/fa";

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
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full group">
            {/* Background Image */}
            <Image
              src={hero1}
              alt="Instant Pay Xpress Way"
              fill
              className="object-cover"
              priority
            />

            {/* Orange overlay using ::before simulation */}
           <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40 mix-blend-multiply z-2" />


            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center  z-10 px-6 max-w-xl mx-auto">
              <h3 className="text-3xl text-white md:text-[48px] sm:text-3xl font-bold mb-3 drop-shadow-md">
                Instant Pay Xpress Way
              </h3>
              <p className="text-center text-white text-2xl sm:text-xl ">
                Australia&apos;s most trusted device buyers — instant payment, free pickup.
              </p>
            </div>

            {/* Bottom-right logo */}
            <div className="absolute bottom-6 right-6 z-10">
              <FiSmartphone className="w-15 h-15 opacity-90 text-white" />
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/60 via-orange-400/50 to-orange-400/40 mix-blend-multiply z-2" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
              <h3 className="text-3xl md:text-[48px] sm:text-3xl font-bold mb-3 drop-shadow-md">
                Instant Payment
              </h3>
              <p className="text-lg sm:text-xl ">
                Quick verification and immediate payout via bank transfer, PayPal or cash.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 z-10">
              <FaMoneyBillWave className="w-15 h-15 opacity-90 text-white" />
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/60 via-orange-400/50 to-orange-400/40 mix-blend-multiply z-2" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
              <h3 className="text-3xl md:text-[48px] sm:text-3xl font-bold mb-3 drop-shadow-md">
                Nationwide Service
              </h3>
              <p className="text-lg sm:text-xl max-w-2xl">
                We collect from your door — fast, secure, and insured.
              </p>
            </div>
            <div className="absolute bottom-6 right-6 z-10">
              <FaTruck className="w-15 h-15 opacity-90 text-white" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff !important;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 24px !important;
          font-weight: bold;
        }
        .swiper-button-prev,
        .swiper-button-next {
          text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </main>
  );
}
