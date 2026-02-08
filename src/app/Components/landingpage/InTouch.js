import Image from "next/image";

export default function InTouch() {
  return (
    <section className="w-full h-[500px] flex flex-col sm:flex-row">
      
      {/* Left Content */}
      <div className="sm:w-1/2 bg-[#e5e0da] flex flex-col justify-center px-6 md:px-20 py-8">
        <h1 className="text-3xl md:text-3xl font-semibold mb-4">
          My Approach to Therapy
        </h1>
        <p className="mb-2 text-gray-700">
          I take a warm, collaborative approach to therapy. My sessions are structured to provide support while allowing space for deep reflection and personal growth. I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness techniques, and body-oriented practices.
        </p>
        <p className="mb-2 text-gray-700">
          My approach is designed to help clients understand both the emotional and physical aspects of their experiences. I work with individuals dealing with single-event trauma and long-term, complex trauma that may stem from early life, relationships, or chronic stress. My focus is on creating safety and stabilization in therapy, ensuring that clients feel regulated not just during our sessions but in their everyday lives.
        </p>
        {/* <p className="mb-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        <hr className="border-gray-400 mb-4" />
        <a
          href="#"
          className="text-[#223614] font-semibold text-base hover:underline transition"
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Right Image */}
      <div className="sm:w-1/2 flex items-center justify-center h-full">
        <Image
          src="/img/approach.jpg"
          alt="Maya"    
          className="w-full h-full object-cover"
          width={600}
          height={500}
          priority
        />
      </div>

    </section>
  );
}
