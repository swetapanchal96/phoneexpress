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
        
        <p className="my-2">
         <span className="font-semibold">1.</span> Where possible, PhoneXpress will reset any of the devices received to the factory default and erase all content and settings, however, if the state of the device is irrecoverable, a reset may not be able to be performed, and in these instances, it is the customer’s responsibility to secure the data on the device.
        </p>

        {/* 2. Eligibility */}
        <p className="my-2">
         <span className="font-semibold">2.</span> I am the sole and rightful owner of this device(s) being sold to PhoneXpress. If any devices(s) that I trade in turn out to be lost or stolen, I will waive my right to be paid.
        </p>

        {/* 3. Device Evaluation and Quotation */}
        <p className="my-2">
         <span className="font-semibold">3.</span> The condition and model number of the device(s) that I have provided to PhoneXpress are accurate.
        </p>

        {/* 4. Device Ownership Verification */}
        <p className="my-2">
         <span className="font-semibold">4.</span> PhoneXpress is not liable for items that may be lost or damaged during transit by Australia Post via our Free Satchel Method. We recommend to our customers that if you'd like extra peace of mind when sending an item, you can add an Extra Cover using Australian posts' extra cover options. It provides loss or damage cover up to the specified value of your items while it's being carried by Australia Post.
        </p>

        {/* 5. Data Privacy and Erasure */}
        <p className="my-2">
         <span className="font-semibold">5.</span> PhoneXpress is not liable for items that may be lost or damaged during transit by Australia Post using your own postage method. You have the option to purchase insurance via Australia Post, at an additional cost – We highly recommend this for speed, reliability and peace of mind.
        </p>

        {/* 6. Payments */}
        <p className="my-2">
         <span className="font-semibold">6.</span> Risk-Free Evaluation/Service: Once we receive the device it will be assessed based on the conditions including but not limited to, those listed on our website.
        </p>

        {/* 7. Shipping and Returns */}
        <p className="my-2">
         <span className="font-semibold">7.</span> Any stolen, blocked, counterfeit or fake devices sent to us will be reported to the police. No payment will be made and the device(s) will not be returned.
        </p>

        {/* 8. Prohibited Activities */}
        <p className="my-2">
         <span className="font-semibold">8.</span>PhoneXpress has the right to reject any device(s) that are from overseas. I understand that I may be offered the option of a lesser value and have the option to accept or reject it.
        </p>

        {/* 9. Limitation of Liability */}
        <p className="my-2">
         <span className="font-semibold">9.</span>I understand that if the device is found to have liquid damage or physical damage, it may be subject to a revised offer which you will have the choice to accept or have the device sent back free of charge.
        </p>

        {/* 10. Intellectual Property */}
        <p className="my-2">
         <span className="font-semibold">10.</span>I understand and agree that all data stored on the device may be deleted and will be unrecoverable.
        </p>

        {/* 11. Termination of Service */}
        <p className="my-2">
         <span className="font-semibold">11.</span>PhoneXpress must "receive" the device within 14 days from the trade-in offer otherwise we have the right to offer a lesser amount – which you will have the opportunity to either accept or reject.
        </p>

        {/* 12. Changes to These Terms */}
        <p className="my-2">
         <span className="font-semibold">12.</span> All device pricing are inclusive of GST.
        </p>

        {/* 13. Governing Law */}
        <p className="my-2">
         <span className="font-semibold">13.</span> I will ensure that all payment information (PayPal Email Address, Account name, BSB and Account number) are correct. PhoneXpress does not validate the details provided and cannot guarantee the receiving bank validates the details for the payment instruction. Any error in these payment details may result in a loss of funds. To the extent permitted by law, PhoneXpress is not liable for loss arising from any error in instructions given or by an authorized user.
        </p>

        {/* 14. Contact Us */}
        <p className="my-2">
         <span className="font-semibold">14.</span>I agree to OPT-IN to PhoneXpress newsletters and am able to OPT-OUT at any time.
        </p>

        {/* 15. */}
        <p className="my-2">
         <span className="font-semibold">15.</span>You acknowledge and agree that all personal identifiable information provided to PhoneXpress in connection with the cash-back program is governed by the privacy policy available on www.mobilemonster.com.au, which the privacy policy may be updated from time to time.
        </p>

        {/* 16. */}
        <p className="my-2">
         <span className="font-semibold">16.</span>Any such items that are sent with the device(s) such as charger(s), external covers, USB devices, micro-USB cards, sim cards and boxes will be either recycled or disposed of. Any such items will not be returned in the case that the final assessment is rejected for any reason.
        </p>

        {/* 17. */}
        <p className="my-2">
         <span className="font-semibold">17.</span>PhoneXpress has the right to reject the initial online trade-in offer if the device has found to have missing/aftermarkets parts and/or has been tampered with by an unauthorised repair agent. This includes the unauthorised software upgrades also known as “jailbroken” for Apple iPhones and “rooted” for Android phones.
        </p>

        {/* 18. */}
        <p className="my-2">
         <span className="font-semibold">18.</span> If there are any issues with your device we will contact you via email and phone to make a revised offer. If we receive no response within 14 days of making the revised-offer, we will proceed with payment for the revised price.
        </p>

        {/* 19. */}
        <p className="my-2">
         <span className="font-semibold">19.</span>PhoneXpress will dispose of any iCloud locked devices after 14 days after we have sent an email out to unlock the device from the iCloud account.
        </p>

        {/* 20. */}
        <p className="my-2">
         <span className="font-semibold">20.</span>If I send my device into PhoneXpress without making an order to sell my device(s) on the website ("sell order") PhoneXpress will attempt to contact you via a letter/mobile number if we do not have any other details. Upon receiving such device(s) that do not have any "sell order(s)" associated with the device we will contact you after 2 weeks of receiving these. After initial contact is made - if there is no response we will process the device. After such time you waive any rights to request the handset back, and we will have the right to offer at the time of contact the "current website price" of the handset.
        </p>

        {/* 21. */}
        <p className="my-2">
         <span className="font-semibold">21.</span>If you are selling us a mobile phone device or Tablets, we may request proof of purchase (invoice) from you. The invoice must be either a PDF form or a photo of a physical invoice. If this information cannot be provided, PhoneXpress has the right to reject your order.
        </p>

        {/* 22. */}
        <p className="my-2">
         <span className="font-semibold">22.</span>If you are selling us a mobile phone device or Tablets, we may request to provide us with your Australian driving license, or if you don't have one, you must provide a copy of your passport. If this information cannot be provided, PhoneXpress has the right to reject your order.
        </p>
      </div>
    </main>
  );
}
