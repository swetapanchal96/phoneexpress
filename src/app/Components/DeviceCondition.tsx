"use client";
import React, { useState } from "react";

type Condition = "Brand New Sealed" | "As New"  | "Good" | "Damaged";

const tabData: Record<Condition, string[]> = {
  "Brand New Sealed": [
    "The phone must be inside the original manufacturer’s sealed box with intact tamper-proof plastic wrap.",
    "The box should be unopened and free from any damage, dents, or tears.",
    "All factory seals, stickers, and holograms on the box must be intact and unbroken.",
    "The phone inside must be unused, unused accessories sealed in their respective packs.",
    "There should be no signs of prior opening, servicing, or usage.",
    "The box usually contains the phone, charger, cable, headphones (if applicable), warranty card, and user manuals, all sealed.",
    "The serial number and IMEI on the box should match the phone’s for authenticity.",
    "Documentation and warranty cards should be original and unopened."
  ],
  "As New": [
    "Perfect working condition",
    "No defects or signs of wear and tear—looks like new",
    "Original battery with above 80% capacity",
    "Free of defects, including white spots, screen burn-in, and water damage",
    "No financial obligations, leases, or contracts associated",
  ],
  Good: [
    "Excellent working condition",
    "Minor signs of use—has superficial scratches but no defects, chips, or dents",
    "Original battery with above 80% capacity",
    "Free of defects, including white spots, screen burn-in, and water damage",
    "No financial obligations, leases, or contracts associated",
  ],  
  "Damaged": [
    "Doesn’t pass the diagnostics test",
    "Non-functioning or missing parts, cracked or chipped screen with dead pixels, white spots, or screen burn-in, or damaged back glass",
    "Refurbished or remanufactured by a third-party company",
    "Bend or major cracks in the housing",
    "Device will be VALUED at $0 if:",
    "Google/Network/PIN locked",
    "Water damage",
    "Overheating issue",
    "Has no sign of life",
  ],
};

const DeviceConditionTabs: React.FC = () => {
  const [selected, setSelected] = useState<Condition>("Brand New Sealed");

  return (
    <section className=" bg-white border border-gray-200 rounded-2xl shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Select Your Device Condition
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(Object.keys(tabData) as Condition[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`px-8 py-3 rounded-xl font-semibold border transition-all duration-300 ${
              selected === tab
                ? "bg-orange-100 border-orange-500 text-orange-600 shadow-md"
                : "bg-white border-gray-300 text-gray-700 hover:border-orange-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Description Card */}
      <div className="bg-white border border-orange-200 rounded-2xl p-8 shadow-sm max-w-3xl mx-auto">
        <ul className="space-y-3">
          {tabData[selected].map((point, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <span className="text-orange-500 mr-2">✔</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DeviceConditionTabs;
