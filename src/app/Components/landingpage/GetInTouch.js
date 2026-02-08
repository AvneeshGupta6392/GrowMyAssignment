export default function GetStarted() {
  return (
    <section className="flex items-center justify-center text-center min-h-screen bg-[#8a8751] px-4">
      <div className="max-w-3xl">
        <h1 className="text-white font-semibold text-3xl md:text-4xl mb-4">
          Ready to Begin?
        </h1>

        <p className="text-white mb-8 text-base md:text-lg mx-auto" style={{ maxWidth: "700px" }}>
          Ready to take the first step towards a happier, healthier you?
          <br />
          If you're feeling stuck or overwhelmed, and you're ready to make a change, I invite you to reach out. Together, we can work on your path to healing, balance, and a more fulfilling life.
        </p>

        <button className="border border-white text-white px-6 py-2 tracking-wide hover:bg-white hover:text-[#8a8751] transition">
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
}
