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
        
        <p className="my-2">
          We know that the information on your phone is sensitive, so we take extra steps to make sure your device is erased and your personal data is removed from any device we receive.
        </p>

        {/* 2. Information We Collect */}
        
        <p className="my-2">
          During our testing procedure, our testing team will factory reset any device we receive twice, once at the beginning at once at the end. This process ensures that your data is removed before we test.
        </p>

        {/* 3. How We Use Your Information */}
        <p className="my-2">
          We still highly recommend that you back up and remove your <b> personal </b> data before you send your device.
        </p>

        {/* 4. Data Sharing and Disclosure */}
        <p className="my-2">
          Please see our page on how to erase your data before you ship it to us.
        </p>

        <div >
        <h3 className="text-xl font-bold">How to Find Your Device’s IMEI Number?</h3>
        <p className="my-2">
          Part of the process will ask for your device’s IMEI number. If you don’t know where to find it, you may head over to this page for instructions.
        </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Removing Your Personal Data</h3>
          <p className="my-2">Make sure that before you send us your devices, you get to make sure that you have done your initial checks and ensured that you have removed your personal data, have logged out and <br/>
           <b> removed your iPhone, Google, or Samsung account</b> from the device.
          </p>
        </div>

        <div >
        <h3 className="text-xl font-bold">What’s the difference between the conditions?</h3>
        <ul className="list-disc pl-6">
          <li><b>As New </b> – These are phones that are in perfect condition. No scratches, no damage, no blemishes. It’s as if they have never been used.</li>
          <li><b>Working </b> – This refers to phones that have some visible signs of use. It could be some scratches on the screen or minor wear & tear to the body of the device.</li>
          <li><b>Dead </b> – As the name suggests, when the phone is beyond usable, it’s classified as dead. This includes the device being water damaged.</li>
        </ul>
        </div>

        <div className="mt-2">
        <h3 className="text-xl font-bold">What happens if you find faults with the phone?</h3>
        <p className="my-2">
         We inspect and review every phone received. If we find that the phone is not as described, we will contact you and offer a reduced price. You can see under the ‘working’ condition exactly what the prices will be with varying amounts of damage to the phone.
        </p>
        </div>

        <div className="mt-2">
        <h3 className="text-xl font-bold">Do the valuations change?</h3>
        <p className="my-2">
         The prices we offer do change, but usually they go down. The reason for this is because technology loses its value over time. We do however pride ourselves on offering more for your phone than anyone else in the market.
        </p>
        </div>

        <div className="mt-2">
        <h3 className="text-xl font-bold">How do I send my phone in?</h3>
        <p className="my-2">
         We’ve worked hard to make the system safe, so once you register your phone on our website,<b> we will send you an Australia Post satchel</b> for you to send us your mobile phone in.<b> You can also go to the nearest post office </b> from your location and send it in immediately without having to wait for a satchel.  If you are based in Melbourne, then you are welcome to <b> drop your phone </b> off in person. We are centrally located in the Melbourne CBD and are always happy to meet you in person. Please note, all payments will be made via EFT or Cheque. We do not offer cash payments. For complete details on Shipping and Drop Off, you may visit this page.
        </p>
        </div>

        <div className="mt-2">
        <h3 className="text-xl font-bold">What do our customers say?</h3>
        <p className="my-2">
         We have bought phones from thousands of Australian customers, all of whom have been delighted with our service. You can view their feedback here (spoiler alert, it’s all positive).
        </p>
        </div>

        <div className="mt-2">
        <h3 className="text-xl font-bold">How fast do you send the money?</h3>
        <p className="my-2">
         This is what makes Mobile Monster the best. We inspect the phone and pay money into your account within 3-5 business days of receiving them. There’s no dilly-dallying around, we know you want your money, so our customer support team works hard to ensure we pay you immediately.
        </p>
        </div>
      </div>
    </main>
  );
}
