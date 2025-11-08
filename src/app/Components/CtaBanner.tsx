import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function SellBanner() {
  return (
    <section className="py-14 bg-linear-to-r from-[#FF7A2D] to-[#f97316] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl font-semibold">
            Have a Phone to Sell? Let’s Make It Express!
          </h3>
          <p className="mt-2 text-white/90 text-sm">
            Turn your old device into instant cash with Australia&apos;s trusted buyer.
          </p>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white text-[#FF7A2D] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition transform"
        >
          Get a Quote Now <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
