"use client";
import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import QuoteForm from "../Components/QuoteForm";

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb pageTitle="Privacy Policy" />

      <div className="max-w-6xl mx-auto text-justify px-4 py-6">
        <h1 className="text-4xl my-5 text-center font-bold">Privacy Policy</h1>

        {/* 1. Introduction */}
        <h3 className="text-xl font-semibold mt-6">1. Introduction</h3>
        <p className="my-2">
          At Phone Express, we value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and safeguard your data
          when you use our website and services.
        </p>

        {/* 2. Information We Collect */}
        <h3 className="text-xl font-semibold mt-6">2. Information We Collect</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number, address, and payment
            details provided during registration or selling your device.
          </li>
          <li>
            <strong>Device Information:</strong> Model, IMEI number, and condition of the devices
            you sell or quote.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, and pages visited for
            analytics and security.
          </li>
        </ul>

        {/* 3. How We Use Your Information */}
        <h3 className="text-xl font-semibold mt-6">3. How We Use Your Information</h3>
        <ul className="list-disc pl-6">
          <li>To evaluate and process your device sale or quote request.</li>
          <li>To verify ownership and prevent fraud.</li>
          <li>To process payments and refunds securely.</li>
          <li>To send updates, offers, or service notifications.</li>
          <li>To improve website functionality and user experience.</li>
        </ul>

        {/* 4. Data Sharing and Disclosure */}
        <h3 className="text-xl font-semibold mt-6">4. Data Sharing and Disclosure</h3>
        <ul className="list-disc pl-6">
          <li>
            We do <strong>not</strong> sell or rent your personal data to third parties.
          </li>
          <li>
            We may share limited information with trusted service providers (e.g., payment gateways,
            couriers) necessary for order fulfillment.
          </li>
          <li>
            We may disclose information if required by law or to prevent fraud or illegal activity.
          </li>
        </ul>

        {/* 5. Data Security */}
        <h3 className="text-xl font-semibold mt-6">5. Data Security</h3>
        <p className="my-2">
          We use encryption, firewalls, and secure access controls to protect your personal data
          from unauthorized access, alteration, or destruction. However, please note that no
          electronic storage or transmission method is 100% secure.
        </p>

        {/* 6. Cookies and Tracking */}
        <h3 className="text-xl font-semibold mt-6">6. Cookies and Tracking</h3>
        <p className="my-2">
          Our website uses cookies to improve user experience, analyze traffic, and remember your
          preferences. You can disable cookies through your browser settings, but certain site
          features may not function properly as a result.
        </p>

        {/* 7. Your Rights */}
        <h3 className="text-xl font-semibold mt-6">7. Your Rights</h3>
        <ul className="list-disc pl-6">
          <li>Access, update, or delete your personal information.</li>
          <li>Withdraw consent to marketing communications.</li>
          <li>Request a copy of your stored data.</li>
          <li>Opt-out of non-essential cookies or data tracking.</li>
        </ul>

        {/* 8. Data Retention */}
        <h3 className="text-xl font-semibold mt-6">8. Data Retention</h3>
        <p className="my-2">
          We retain your personal data only as long as necessary to fulfill the purpose it was
          collected for or as required by applicable law (e.g., tax, accounting, or legal
          requirements).
        </p>

        {/* 9. Third-Party Links */}
        <h3 className="text-xl font-semibold mt-6">9. Third-Party Links</h3>
        <p className="my-2">
          Our website may contain links to external websites. We are not responsible for the privacy
          practices or content of those third-party sites. Please review their respective privacy
          policies before sharing your information.
        </p>

        {/* 10. Children’s Privacy */}
        <h3 className="text-xl font-semibold mt-6">10. Children’s Privacy</h3>
        <p className="my-2">
          Our services are not directed to children under the age of 18. We do not knowingly collect
          personal data from minors. If you believe your child has provided us with personal data,
          please contact us immediately for deletion.
        </p>

        {/* 11. Updates to This Policy */}
        <h3 className="text-xl font-semibold mt-6">11. Updates to This Policy</h3>
        <p className="my-2">
          We may update or modify this Privacy Policy periodically to reflect changes in our
          practices or legal requirements. The updated version will be posted on this page with a
          “Last Updated” date. Continued use of our website implies your acceptance of the updated
          policy.
        </p>

        {/* 12. Contact Us */}
        <h3 className="text-xl font-semibold mt-6">12. Contact Us</h3>
        <p className="my-2">
          If you have any questions or concerns regarding this Privacy Policy or how we handle your
          data, please contact us at:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@phoneexpress.com" className="text-blue-600 underline">
              support@phoneexpress.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +91-XXXXXXXXXX
          </li>
          <li>
            <strong>Address:</strong> [Insert Business Address]
          </li>
        </ul>

       
      </div>
    </main>
  );
}
