export default function BottomFooter() {
  return (
    <footer className="bg-[#e9e4dc] py-20 text-center text-[#243a1a]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Links */}
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <a href="#" className="underline hover:text-gray-700 transition">
            Privacy & Cookies Policy
          </a>
          <a href="#" className="underline hover:text-gray-700 transition">
            Good Faith Estimate
          </a>
          <a href="#" className="underline hover:text-gray-700 transition">
            Website Terms & Conditions
          </a>
          <a href="#" className="underline hover:text-gray-700 transition">
            Disclaimer
          </a>
        </div>

        {/* Credits */}
        <div className="mb-4">
          Website Template Credits:{" "}
          <a href="#" className="underline hover:text-gray-700 transition">
            Lilac Template
          </a>
        </div>

        {/* Copyright */}
        <div>
          All Rights Reserved © 2026 Your Business Name Here, LLC.
        </div>
        <div>
          <p>Developed By @vneesh_gupta.</p>
        </div>

      </div>
    </footer>
  );
}
