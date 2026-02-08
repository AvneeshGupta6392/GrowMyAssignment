// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-[#fbf6f1] bg-opacity-75 py-3 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

//         {/* Brand */}
//         <a
//           href="#"
//           className="text-[#223614] font-semibold text-3xl md:text-3xl"
//         >
//           Dr. Maya Reynolds, PsyD
//         </a>

//         {/* Navbar links */}
//         <div className="font-semibold flex space-x-8 text-lg md:text-1xl text-[#223614]">
//           <Link href="/Blog" className="hover:underline transition">
//             Blog
//           </Link>
//           {/* <Link href="#office" className="hover:underline transition">Our office</Link> */}
//           <a href="/#office" className="hover:underline transition">
//   Our office
// </a>

//           <Link href="/Contact" className="hover:underline transition">Contact Me</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#fbf6f1]/75 backdrop-blur py-3 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a
            href="/"
            className="text-[#223614] font-semibold text-2xl md:text-3xl"
          >
            Dr. Maya Reynolds, PsyD
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-lg text-[#223614]">
            <Link href="/Blog" className="hover:underline transition">
              Blog
            </Link>

            <a href="/#office" className="hover:underline transition">
              Our office
            </a>

            <Link href="/Contact" className="hover:underline transition">
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#223614] focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 font-semibold text-[#223614]">
            <Link
              href="/Blog"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>

            <a
              href="/#office"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Our office
            </a>

            <Link
              href="/Contact"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
