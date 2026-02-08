"use client"; // Required because we use useState

import { useState } from "react";
import Image from "next/image";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "Do you take insurance?", answer: "Yes, we accept most major insurance providers." },
    { question: "What are your rates?", answer: "Our rates depend on the service you choose." },
    { question: "Do you have any openings?", answer: "Yes, please check our careers page." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#e5e0da] text-[#223614] h-[750px] flex flex-col lg:flex-row items-center px-4 md:px-16">

      {/* Left Image */}
      <div className="lg:w-1/2 flex justify-center h-150">
        <Image
          src="/img/FA.webp"
          alt="FAQ"
          width={420}
          height={600}
          className="rounded-tl-[50%] rounded-tr-[50%] object-cover mt-2 mb-2"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex flex-col justify-start lg:justify-center h-full px-4 md:px-12 pt-10 lg:pt-20">
        <p className="text-4xl md:text-[50px] font-semibold mb-3">FAQ.</p>
        <hr className="border-gray-600 mb-3" />

        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#2b3a1f]">
              <button
                className="w-full flex justify-between items-center text-[#2b3a1f] font-semibold text-2xl md:text-3xl py-2 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`text-2xl transition-transform ${openIndex === index ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}
              >
                <p className="px-2 py-2 text-gray-700 text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
