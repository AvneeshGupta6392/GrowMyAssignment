"use client";

import { useState } from "react";

export default function Aboutlocation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out. I will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-[#e9e4dc] py-20 px-4 min-h-screen flex items-center justify-center" >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#223614] mb-4">
          Contact Me
        </h2>
        <p className="text-[#223614] mb-3">
          If you’re ready to begin your healing journey, please fill out the
          form below and I’ll be in touch shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md text-left"
        >
          {/* Name */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-[#223614] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-[640px] h-[30px] border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223614]"
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-[#223614] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-[640px] h-[30px] border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223614]"
            />
          </div>

          {/* Phone */}
          <div className="mb-2">
            <label className=" block text-sm font-semibold text-[#223614] mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-[640px] h-[30px] border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#223614]"
            />
          </div>

          {/* Message */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-[#223614] mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-[640px] h-[70px] border border-gray-300 px-4 py- rounded-md focus:outline-none focus:ring-2 focus:ring-[#223614]"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-[640px] h-[30px] border border-[#223614] text-[#223614] font-semibold tracking-wide hover:bg-[#223614] hover:text-white transition"
          >
            SEND MESSAGE →
          </button>
        </form>
      </div>
    </section>
  );
}
