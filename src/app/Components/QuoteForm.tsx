// app/components/QuoteForm.tsx
'use client';
import { FaTelegramPlane } from "react-icons/fa";

import React, { useState } from 'react';
import SectionHeading from "./SectionHeading";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  deviceBrand: string;
  deviceCondition: '' | 'new' | 'excellent' | 'good' | 'damaged';
  imei: string;
  expectedPrice?: string;
  message?: string;
};

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  deviceBrand: '',
  deviceCondition: '',
  imei: '',
  expectedPrice: '',
  message: '',
};

export default function QuoteForm() {
  const [data, setData] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);

  function onChange<K extends keyof FormState>(key: K, val: FormState[K]) {
    setData((d) => ({ ...d, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      alert('Quote request submitted!');
      setData(initial);
    } finally {
      setSubmitting(false);
    }
  }

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                id="phone"
                required
                value={data.phone}
                onChange={(e) => onChange('phone', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>

            <div>
              <label htmlFor="deviceBrand" className="block text-sm font-semibold mb-1">Device Brand &amp; Model</label>
              <input
                id="deviceBrand"
                required
                value={data.deviceBrand}
                onChange={(e) => onChange('deviceBrand', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="damaged">Damaged</option>
              </select>
            </div>

            <div>
              <label htmlFor="imei" className="block text-sm font-semibold mb-1">IMEI Number</label>
              <input
                id="imei"
                value={data.imei}
                onChange={(e) => onChange('imei', e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 transition hover:border-orange-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
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
          </div>
        </form>
      </div>
    </section>
  );
}
