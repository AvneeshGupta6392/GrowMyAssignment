export default function FooterSection() {
  return (
    <footer className="bg-[#fbf7f1] text-[#243a1a] py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">

          {/* Left Section */}
          <div className="md:w-1/2 mb-1 md:mb-0">
            <h1 className="text-2xl font-semibold mb-4">Lilac Template</h1>

            <p className="mb-1">123rd Street 45 W,</p>
            <p className="mb-4">Santa Monica, CA 90401</p>

            <p className="mb-1">
              <a
                href="mailto:email@example.com"
                className="underline hover:text-gray-800 transition"
              >
                    info@drmayareynolds.com
.
              </a>
            </p>
            <p>
              <a
                href="tel:5555555555"
                className="underline hover:text-gray-800 transition"
              >
                (555) 555-5555
              </a>
            </p>
          </div>

          {/* Middle Section */}
          <div className="md:w-1/4 mb-10 md:mb-0">
            <h4 className="font-semibold mb-4 text-lg">Hours</h4>
            <p className="mb-1">Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/4">
            <h4 className="font-semibold mb-4 text-lg">Find</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#office" className="underline hover:text-gray-800 transition">
                  Our Office
                </a>
              </li>
              <li>
                <a href="/Contact" className="underline hover:text-gray-800 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/Blog" className="underline hover:text-gray-800 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
