import Image from "next/image";

export default function Chat() {
  return (
    <section className="w-full h-[600px] bg-[#fbf6f1] text-[#223614] flex flex-col lg:flex-row items-center justify-center px-4 md:px-16">

      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-center text-start px-4 md:px-12 pt-5">
        <p className="font-semibold text-4xl md:text-[25px] mb-4">
          Why Choose Dr. Maya Reynolds, PsyD?
        </p>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not only symptom relief but also helping clients develop insight, resilience, and a stronger relationship with themselves over time.<br/>

If you're seeking therapy with a professional who combines practical tools with depth-oriented work, and who understands the challenges of living and working in a fast-paced world, I may be a good fit for you.
        </p>
        <div className="border border-black px-4 py-1 font-semibold mt-1 inline-block">
          <a href="#" className="hover:underline text-black transition">
            LET'S CHAT --
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center items-center h-full">
        <Image
          src="/img/maya.png"
          alt="Maya"
          className="rounded-tl-[50%] rounded-tr-[50%] object-cover"
          width={350}
          height={200}
          priority
        />
      </div>

    </section>
  );
}
