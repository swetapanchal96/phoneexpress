// app/components/SiteFooter.tsx
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "@/assets/logo.webp"

export default function SiteFooter() {
  return (
    <footer className="bg-linear-to-b from-[#111827] to-[#000000] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Social */}
        <div>
          <Link href='/'>
          <Image src={logo} alt="PhoneXpress" width={160} height={80} className="h-20 w-auto mb-4" />
          </Link>
          <p className="text-sm text-gray-400">Turning devices into value with trust and transparency.</p>

          <div className="mt-5 flex items-center gap-4 text-xl">
            <Link href="#" className="hover:text-[#FF7A2D] transition" aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-[#FF7A2D] transition" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="#" className="hover:text-[#FF7A2D] transition" aria-label="Instagram"><FaInstagram /></Link>
            <Link href="#" className="hover:text-[#FF7A2D] transition" aria-label="LinkedIn"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#FF7A2D] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#FF7A2D] transition">About</Link></li>
            <li><Link href="/what-we-buy" className="hover:text-[#FF7A2D] transition">What We Buy</Link></li>
            <li><Link href="/how-it-works" className="hover:text-[#FF7A2D] transition">How It Works</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-white font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faqs" className="hover:text-[#FF7A2D] transition">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-[#FF7A2D] transition">Contact</Link></li>
            <li><Link href="/privacy&policy" className="hover:text-[#FF7A2D] transition">Privacy Policy</Link></li>
            <li><Link href="/terms&condition" className="hover:text-[#FF7A2D] transition">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h5 className="text-white font-semibold mb-4">Contact Us</h5>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FF7A2D] text-lg mt-0.5" />
              <span>123 Express Lane, Sydney, NSW, Australia</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FF7A2D] text-lg" />
              <a href="tel:+61412345678" className="hover:text-[#FF7A2D] transition">+61 412 345 678</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FF7A2D] text-lg" />
              <a href="mailto:support@phonexpress.com" className="hover:text-[#FF7A2D] transition">support@phonexpress.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2025 PhoneXpress. All Rights Reserved.
      </div>
    </footer>
  );
}
