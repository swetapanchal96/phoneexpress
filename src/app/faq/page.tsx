
'use client';

import React from 'react';
import Link from 'next/link';
import Faqs from '../Components/Faqs';
import Breadcrumb from '../Components/Breadcrumb';


export default function FAQS() {
  return (
    <div className="">
         <Breadcrumb pageTitle="FAQS" />
    <section id="faqs" className=" bg-white">
      <Faqs />
    </section>
    </div>
  );
}
