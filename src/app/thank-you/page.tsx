"use client";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-white to-gray-100 px-6">
      <div className="text-center bg-white shadow-lg rounded-2xl p-10 max-w-md w-full animate-fade-in">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 w-16 h-16" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          Your message has been successfully submitted. We’ll get back to you soon.
        </p>

        <button
          onClick={() => router.push("/")}
          className="bg-[#ff7a2d] text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-200"
        >
          Back to Home
        </button>
      </div>

      
    </div>
  );
}
