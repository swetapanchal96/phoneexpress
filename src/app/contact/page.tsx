"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../Components/Breadcrumb";
import QuoteForm from "../Components/QuoteForm";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";


export default function WhatWeBuyPage() {
    return (
        <main className="bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb pageTitle="Contact Us" />
            <QuoteForm />
            <div className="mt-20 bg-linear-to-br from-gray-50 to-white shadow-lg rounded-2xl p-10 border border-gray-100">
    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Alternate Contact Options
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Card */}
        {[
            {
                icon: <FaPhoneAlt className="text-white text-2xl" />,
                title: "Phone Number",
                link: "tel:+61422794777",
                text: "+61 422 794 777",
                color: "bg-blue-600",
            },
            {
                icon: <FaEnvelope className="text-white text-2xl" />,
                title: "Email Address",
                link: "mailto:Hello@phonexpress.com.au",
                text: "Hello@phonexpress.com.au",
                color: "bg-indigo-500",
            },
            {
                icon: <FaWhatsapp className="text-white text-2xl" />,
                title: "WhatsApp Chat",
                link: "https://wa.me/+61422794777",
                text: "Chat on WhatsApp",
                color: "bg-green-500",
            },
            {
                icon: <FaMapMarkerAlt className="text-white text-2xl" />,
                title: "Find Us",
                link: "https://www.google.com/maps",
                text: "View on Google Maps",
                color: "bg-red-500",
            },
        ].map((item, idx) => (
            <div
                key={idx}
                className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center p-6"
            >
                <div
                    className={`w-16 h-16 flex items-center justify-center rounded-full ${item.color} shadow-md mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                    {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                </h3>
                <Link
                    href={item.link}
                    target={item.title.includes("Find") || item.title.includes("Chat") ? "_blank" : "_self"}
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                    {item.text}
                </Link>
                {/* <div className="absolute inset-0 rounded-xl bg-linear-to-t from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            </div>
        ))}
    </div>
    </div>

        </main>
    );
}
