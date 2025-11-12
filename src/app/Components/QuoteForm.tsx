// app/components/QuoteForm.tsx
'use client';
import { FaTelegramPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import SectionHeading from "./SectionHeading";
import axios from "axios";
import { apiUrl } from '@/config';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  deviceBrand: string;
  deviceModel: string;
  deviceCondition: '' | 'new' | 'excellent' | 'good' | 'damaged';
  imei_1: string;
  imei_2: string;
  expectedPrice?: string;
  message?: string;
  pickup_date: string;
  pickup_time: string;
  address: string;
};

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  deviceBrand: '',
  deviceCondition: '',
  imei_1: '',
  imei_2: '',
  expectedPrice: '',
  message: '',
  deviceModel: '',
  pickup_date: '',
  pickup_time: '',
  address: ''
};

export default function QuoteForm() {
  const [data, setData] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const router = useRouter();

  function onChange<K extends keyof FormState>(key: K, val: FormState[K]) {
    setData((d) => ({ ...d, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    try {
      const payload = {
        Customer_name: data.fullName,
        brand: data.deviceBrand,
        model: data.deviceModel,
        Customer_email: data.email,
        device_condition: data.deviceCondition,
        Customer_phone: data.phone,
        imei_1: data.imei_1,
        imei_2: data.imei_2,
        expected_amt: data.expectedPrice,
        message: data.message,
        pickup_date: data.pickup_date,
        pickup_time: data.pickup_time,
        address: data.address,
      }

      const response = await axios.post(`${apiUrl}/Customer_inquiry`, payload, {
        headers: {
          "Content-Type": "application/json"
        },
      });

      if (response.data.success) {
        // alert(response.data.message);
        setMessage({ type: "success", text: response.data.message });
        setData(initial);

        router.push('/thank-you')
      } else {
        // alert("Something went wrong. Please try again.")
        setMessage({ type: "error", text: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: "Failed to submit inquiry. Please check your network and try again.",
      });
      // alert("Failed to submit inquiry. Please check your network or try again later.")

    } finally {
      setSubmitting(false);
    }
  }

  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <style jsx>{`
        .section-title { letter-spacing: -0.015em; }
        .btn-orange { background-color: #fb923c; }
        .border-px-orange { border-color: #fb923c; }
      `}</style>

      {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold section-title mb-2">Get a Quote for Your Device</h2>
        <p className="text-gray-600 mb-10">Fast response • Fair value • Instant payment</p>
      </div> */}

      <SectionHeading
        title="Get a Quote for Your Device"
        subtitle="Fast response • Fair value • Instant payment"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          id="quoteForm"
          onSubmit={onSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl border border-orange-200 hover:border-px-orange transition duration-300 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                id="fullName"
                required
                value={data.fullName}
                onChange={(e) => onChange('fullName', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
              <input
                id="email"
                type="email"
                required
                value={data.email}
                onChange={(e) => onChange('email', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                id="phone"
                required
                value={data.phone}
                maxLength={10}
                pattern="[0-9]{10}"
                onChange={(e) => onChange('phone', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label htmlFor="deviceBrand" className="block text-sm font-semibold mb-1">Device Brand </label>
              <input
                id="deviceBrand"
                required
                value={data.deviceBrand}
                onChange={(e) => onChange('deviceBrand', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="deviceModel" className="block text-sm font-semibold mb-1">Device Model</label>
              <input
                id="deviceModel"
                required
                value={data.deviceModel}
                onChange={(e) => onChange('deviceModel', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
            <div>
              <label htmlFor="deviceCondition" className="block text-sm font-semibold mb-1">Device Condition</label>
              <select
                id="deviceCondition"
                required
                value={data.deviceCondition}
                onChange={(e) => onChange('deviceCondition', e.target.value as FormState['deviceCondition'])}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              >
                <option value="" disabled>Select condition</option>
                <option value="new">Brand New Sealed</option>
                <option value="asnew">As New</option>
                <option value="good">Good</option>
                <option value="damaged">Damaged</option>
              </select>
            </div>

            <div>
              <label htmlFor="expectedPrice" className="block text-sm font-semibold mb-1">Expected Price (Optional)</label>
              <input
                id="expectedPrice"
                placeholder="$"
                value={data.expectedPrice}
                onChange={(e) => onChange('expectedPrice', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="imei_1" className="block text-sm font-semibold mb-1">IMEI Number 1</label>
              <input
                id="imei_1"
                value={data.imei_1}
                onChange={(e) => onChange('imei_1', e.target.value)}
                maxLength={15}
                pattern="[0-9]{15}"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="imei_2" className="block text-sm font-semibold mb-1">IMEI Number 2</label>
              <input
                id="imei_2"
                value={data.imei_2}
                maxLength={15}
                pattern="[0-9]{15}"
                onChange={(e) => onChange('imei_2', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="pickup_date" className="block text-sm font-semibold mb-1">
                Pickup Date (Optional)
              </label>
              <input
                id="pickup_date"
                type="date"
                value={data.pickup_date}
                onChange={(e) => onChange("pickup_date", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="pickup_time" className="block text-sm font-semibold mb-1">
                Pickup Time (Optional)
              </label>
              <input
                id="pickup_time"
                type="time"
                required
                value={data.pickup_time}
                onChange={(e) => onChange("pickup_time", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>


          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-semibold mb-1">
              Address (Optional)
            </label>
            <textarea
              id="address"
              required
              rows={3}
              value={data.address}
              onChange={(e) => onChange("address", e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              placeholder="Enter your complete address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message / Remarks</label>
            <textarea
              id="message"
              rows={4}
              value={data.message}
              onChange={(e) => onChange('message', e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow hover:shadow-lg transition btn-orange disabled:opacity-70"
            >
              <FaTelegramPlane className="w-4 h-4" />

              {submitting ? 'Submitting...' : 'Get Instant Quote'}
            </button>

            {message && (
              <p
                className={`mt-4 text-sm font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
              >
                {message.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
