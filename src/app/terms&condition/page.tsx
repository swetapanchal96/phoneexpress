"use client";
import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import QuoteForm from "../Components/QuoteForm";

export default function TermsCondition() {
  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb pageTitle="Terms & Condition" />

      <div className="max-w-6xl mx-auto text-justify px-4 py-6">
        <h1 className="text-4xl my-5 text-center font-bold">Terms & Conditions</h1>

        {/* 1. About Phone Express */}
        <h3 className="text-xl font-semibold mt-6">1. About Phone Express</h3>
        <p className="my-2">
          Phone Express is an online platform that allows users to sell their used or old mobile
          phones and related electronic devices. We evaluate, purchase, and recycle or resell these
          devices responsibly.
        </p>

        {/* 2. Eligibility */}
        <h3 className="text-xl font-semibold mt-6">2. Eligibility</h3>
        <p className="my-2">By using our website, you confirm that:</p>
        <ul className="list-disc pl-6">
          <li>You are at least 18 years old.</li>
          <li>You are the rightful owner of the device you are selling or have full authority to sell it.</li>
          <li>The device is not stolen, blacklisted, or obtained unlawfully.</li>
        </ul>
        <p className="my-2">
          If we find that any device violates these conditions, we reserve the right to cancel the
          transaction and report it to law enforcement.
        </p>

        {/* 3. Device Evaluation and Quotation */}
        <h3 className="text-xl font-semibold mt-6">3. Device Evaluation and Quotation</h3>
        <ul className="list-disc pl-6">
          <li>
            The initial price shown on our website is based on the information you provide about
            your device’s model, condition, and functionality.
          </li>
          <li>Final pricing may change after physical inspection or verification.</li>
          <li>
            If the final inspection value differs from your declared condition, we will contact you
            with a revised offer.
          </li>
          <li>
            You can choose to accept or reject the new offer. If you reject it, your device will be
            returned to you (shipping charges may apply).
          </li>
        </ul>

        {/* 4. Device Ownership Verification */}
        <h3 className="text-xl font-semibold mt-6">4. Device Ownership Verification</h3>
        <ul className="list-disc pl-6">
          <li>The device must be unlocked and free from any outstanding finance or EMI.</li>
          <li>All accounts, passcodes, and security locks (iCloud, Google lock, etc.) must be removed.</li>
          <li>
            Devices that fail ownership verification or are reported as lost/stolen will be reported
            to authorities and not returned.
          </li>
        </ul>

        {/* 5. Data Privacy and Erasure */}
        <h3 className="text-xl font-semibold mt-6">5. Data Privacy and Erasure</h3>
        <ul className="list-disc pl-6">
          <li>Back up and delete all personal data before sending your device.</li>
          <li>Remove SIM cards and memory cards.</li>
          <li>
            Once we receive your device, we may perform a factory reset and erase all remaining
            data. However, Phone Express is not responsible for any data loss or recovery after the
            sale.
          </li>
          <li>
            For more details, please refer to our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </li>
        </ul>

        {/* 6. Payments */}
        <h3 className="text-xl font-semibold mt-6">6. Payments</h3>
        <ul className="list-disc pl-6">
          <li>
            Payments will be made through your chosen mode (e.g., bank transfer, UPI, or wallet)
            after successful inspection.
          </li>
          <li>Processing may take 1–3 business days from the date of approval.</li>
          <li>Incorrect payment details may delay or void the transaction.</li>
        </ul>

        {/* 7. Shipping and Returns */}
        <h3 className="text-xl font-semibold mt-6">7. Shipping and Returns</h3>
        <ul className="list-disc pl-6">
          <li>Once you schedule a pickup, you agree to pack your device securely.</li>
          <li>
            In case of a rejected offer, devices will be returned using standard courier service.
          </li>
          <li>
            Phone Express is not responsible for any damage or loss during transit caused by
            third-party courier services.
          </li>
        </ul>

        {/* 8. Prohibited Activities */}
        <h3 className="text-xl font-semibold mt-6">8. Prohibited Activities</h3>
        <ul className="list-disc pl-6">
          <li>Provide false, misleading, or incomplete information.</li>
          <li>Attempt to sell stolen or counterfeit devices.</li>
          <li>Interfere with or disrupt our website or systems.</li>
          <li>Use the website for illegal or fraudulent activities.</li>
        </ul>

        {/* 9. Limitation of Liability */}
        <h3 className="text-xl font-semibold mt-6">9. Limitation of Liability</h3>
        <ul className="list-disc pl-6">
          <li>Phone Express will not be held liable for any loss of data or profits.</li>
          <li>
            Phone Express is not responsible for any damage or delay caused by third-party services
            (courier, payment providers, etc.).
          </li>
          <li>
            We are not liable for indirect or consequential damages arising from the use of our
            website or services.
          </li>
        </ul>

        {/* 10. Intellectual Property */}
        <h3 className="text-xl font-semibold mt-6">10. Intellectual Property</h3>
        <p className="my-2">
          All content, logos, text, and images on Phone Express are owned by or licensed to us. You
          may not copy, distribute, or use them for commercial purposes without prior written
          consent.
        </p>

        {/* 11. Termination of Service */}
        <h3 className="text-xl font-semibold mt-6">11. Termination of Service</h3>
        <p className="my-2">
          We reserve the right to suspend or terminate your access to our website at any time, with
          or without notice, for any reason, including fraudulent or abusive behavior.
        </p>

        {/* 12. Changes to These Terms */}
        <h3 className="text-xl font-semibold mt-6">12. Changes to These Terms</h3>
        <p className="my-2">
          We may update or revise these Terms at any time. The updated version will be posted on
          this page with the “Last Updated” date. Continued use of the website after any changes
          means you accept the revised Terms.
        </p>

        {/* 13. Governing Law */}
        <h3 className="text-xl font-semibold mt-6">13. Governing Law</h3>
        <p className="my-2">
          These Terms are governed by and construed in accordance with the laws of India. Any
          disputes shall be subject to the exclusive jurisdiction of the courts of your city in
          India.
        </p>

        {/* 14. Contact Us */}
        <h3 className="text-xl font-semibold mt-6">14. Contact Us</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@phoneexpress.com" className="text-blue-600 underline">
              support@phoneexpress.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +91 98765 43210
          </li>
          <li>
            <strong>Address:</strong> [Insert Business Address]
          </li>
        </ul>
      </div>
    </main>
  );
}
