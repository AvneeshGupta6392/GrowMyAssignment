export default function MainPage() {
  return (
    <section className="w-full h-[710px] text-[#223614] flex items-center justify-center px-4 md:px-16">
      <div className="flex flex-col lg:flex-row h-full items-center lg:items-stretch w-full">

        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center items-center h-full">
          <img
            src="./img/maya.png"
            alt="Maya"
            className="w-[90%] h-full object-cover rounded-tl-[50%] rounded-tr-[50%] pt-20 px-10"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center text-start px-4 md:px-12">
          <p className="font-semibold text-5xl md:text-[47px] leading-tight mb-1 flex items-center justify-center text-start">
            About<br/><span className=" px-2 text-[24px]">(Dr. Maya Reynolds, PsyD)</span>
          </p>
          <p className="font-simple text-lg md:text-[19px] mb-6">
            I am a licensed clinical psychologist based in Santa Monica, California. I specialize in therapy for adults dealing with anxiety, stress, and the impact of past experiences. Many of the individuals I work with are high-achieving, thoughtful, and self-aware, yet often feel overwhelmed, stuck, or emotionally on edge.<br/><br/>
            I focus on addressing anxiety, panic, trauma, and burnout, helping clients navigate the inner tension and worry that can impact their lives. My clients often appear “functional” on the outside but struggle with constant overthinking, tension, difficulty sleeping, or a sense of being on edge.
          </p>
          <div className="border border-black px-4 py-1 font-semibold mt-1">
            <a
              href="#"
              className="hover:underline text-black transition"
            >
              CONNECT WITH ME--
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
