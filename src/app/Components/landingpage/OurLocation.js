import Image from 'next/image';

export default function OurLocation() {
  return (
    <section id="office">

      <main className="min-h-screen bg-olive-700 flex items-center justify-center py-16 px-4" >
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800">Office and Environment</h1>
            <p className="text-lg text-gray-600 mt-2">
              My office is a quiet and private space designed to be calming and grounding. It features natural light and a minimalist environment, helping clients feel more at ease when they arrive. The office itself contributes to the healing process, fostering a sense of safety and comfort.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8">Hours</h2>
            <p className="text-lg text-gray-600">
              Monday - Friday
            </p>
            <p className="text-lg text-gray-600">
              10am - 6pm
            </p>
          </div>

          {/* Right Column */}
          <div className="  md:mt-0 relative">
            <Image
              src="/img/officee.jpeg" // Replace with your image path
              alt="Office Location"
              layout="intrinsic"
              width={600}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>

    </section>
  );
}
