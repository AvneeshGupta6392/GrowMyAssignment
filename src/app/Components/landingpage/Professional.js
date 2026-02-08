"use client";

import { useState } from "react";

export default function Professional() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { title: "EDUCATION", content: "" },
    { title: "LICENSURE", content: "Our rates depend on the service you choose." },
    { title: "CERTIFICATION", content: "" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#e5e0da] py-10 flex justify-center">
      <div className="lg:w-2/3 px-4">

        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          MY PROFESSIONAL BACKGROUND
        </h1>
        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                className="w-full flex justify-between items-center text-[#2b3a1f] font-semibold text-lg md:text-xl py-2 px-2 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.title}</span>
                <span className={`text-2xl transition-transform ${openIndex === index ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {faq.content && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="px-2 py-2 text-gray-700 text-base">{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
