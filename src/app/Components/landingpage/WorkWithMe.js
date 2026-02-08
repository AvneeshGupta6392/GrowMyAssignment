"use client"; // optional, only if you plan to use hooks

import Image from "next/image";

export default function WorkWithMe() {
  return (
    <section className="w-full bg-[#e5e0da] flex flex-col lg:flex-row h-[500px]">
      
      {/* Right Image */}
      <div className="lg:w-1/2 flex items-center justify-center h-full">
        <Image
          src="/img/expect.webp"
          alt="Work With Me"
          width={600}    // desired width
          height={500}   // desired height
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-center p-10">
        <h1 className="text-3xl md:text-3xl font-semibold mb-4">What You Can Expect</h1>
        <p className="mb-2 text-base md:text-lg">
          In our sessions, I will offer a tailored approach to address your specific needs, integrating evidence-based methods such as Cognitive Behavioral Therapy (CBT), EMDR, mindfulness techniques, and body-focused therapies.
        </p>
        <p className="mb-2 text-base md:text-lg">
          The work we do together will focus on helping you feel more regulated, grounded, and confident in your ability to handle life's challenges, not just during our time together, but in your day-to-day life.
        </p>
        <hr className="border-gray-700 mb-4" />
        <a
          href="#"
          className="text-[#223614] font-semibold text-base md:text-lg underline hover:text-gray-700 transition"
        >
          WORK WITH ME
        </a>
      </div>

    </section>
  );
}
