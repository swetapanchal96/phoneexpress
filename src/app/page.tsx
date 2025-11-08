import Navbar from "@/app/Components/Header";
import Hero from "@/app/Components/Hero";
import Image from "next/image";
import AboutSection from "./Components/AboutSection";
import HowItWorks from "./Components/HowItWork";
import WhatWeBuy from "./Components/WhatWeBuy";
import WhyChoose from "./Components/WhyChoose";
import Testimonials from "./Components/Testimonial";
import Faqs from "./Components/Faqs";
import QuoteForm from "./Components/QuoteForm";
import CtaBanner from "./Components/CtaBanner";
import SiteFooter from "./Components/Footer";


export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <HowItWorks />
      <WhatWeBuy />
      <WhyChoose />
      <Testimonials />
      <Faqs />
      <QuoteForm />
      <CtaBanner />
      {/* <SiteFooter /> */}
    </div>
  );
}
