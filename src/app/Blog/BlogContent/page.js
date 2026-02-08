import Image from 'next/image'; // Importing Next.js image optimization component

export default function BlogContent() {
  return (
    <section className="flex items-center justify-center py-16 px-6 bg-[#e9e4dc]">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center space-x-6">
        {/* Left Column (Image) */}
        <div className=" md:w-1/2 bg-gray-200 h-[400px] rounded-xl overflow-hidden">
          {/* Image space - You can add an image here later */}
          <Image 
            src="/img/blog.jpg" 
            alt="Blog Image" 
            // layout="fill" 
            objectFit="cover" 
            layout="responsive"  // Responsive layout (fills container size)
            width={400}  // The width you want the image to scale to
            height={300}
          />
        </div>

        {/* Right Column (Text) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-[#223614] mb-4 pt-6">Welcome to The Lilac Blog</h1>
          <p className="text-lg text-[#223614] mb-6">
            I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, CA. I specialize in helping adults manage anxiety, trauma, burnout, and stress. Through a warm, collaborative approach, I integrate evidence-based methods like CBT, EMDR, and mindfulness to help you find balance and emotional well-being.
          </p>
          <p className="text-lg text-[#223614] mb-6">
            <span className="font-bold">Therapy Focus:</span><br/>

Anxiety & Panic: Alleviating constant worry and tension.<br/>

Trauma Recovery: Healing from past experiences, whether single incidents or long-term patterns.<br/>

Burnout & Perfectionism: Supporting professionals and creatives in reconnecting with themselves and managing stress.
          </p>
          <p className="text-lg text-[#223614] mb-6">I offer both in-person and secure telehealth sessions for clients in California. If you’re ready to begin your healing journey, I invite you to reach out and take the first step toward a balanced, fulfilling life.</p>
          <p className="text-md text-[#223614]">Glad you're here.</p>
        </div>
      </div>
    </section>
  );
}
