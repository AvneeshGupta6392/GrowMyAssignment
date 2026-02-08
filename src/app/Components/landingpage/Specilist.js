import Image from "next/image";

export default function Specilist() {
  const cards = [
    {
      Specilist: "Mr.Nick(MBBS)",
      text: "Whether it's a single incident or complex trauma, I provide trauma therapy using a paced and safe approach.",
      img: "/img/1.jpeg",
      title: "Trauma Therapy",
    },
    {
      Specilist: "SELF ESTEEM",
      text: "I support individuals managing anxiety, panic attacks, and the physical symptoms that accompany these struggles.",
      img: "/img/2.jpeg",
      title: "Anxiety and Panic Management:",
    },
    {
      Specilist: "Mrs. Tamza",
      text: "Many of my clients are professionals, creatives, and entrepreneurs experiencing burnout and perfectionism. Therapy becomes a space to slow down, reconnect with themselves, and develop sustainable ways of living and working",
      img: "/img/3.jpeg",
      title: "Burnout and Perfectionism",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <h1 className="text-4xl font-semibold text-center mb-12">Specializations and Services Offered</h1>

      <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#e5e0da] w-full sm:w-[23rem] rounded-xl shadow-lg flex flex-col items-center"
          >
            <div className="p-6 text-center">
              <p className="font-semibold text-lg mb-3">{card.title}</p>
              <p className="text-gray-700 text-sm">{card.text}</p>
            </div>
            <div className="w-40 h-40 relative mb-6">
              <Image
                src={card.img}
                alt={card.title}
                className="rounded-full object-cover"
                fill
                sizes="160px"
                priority
              />
             
            </div>
             <p className="font-semibold text-lg mb-3">{card.Specilist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
