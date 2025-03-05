"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="text-white flex flex-col items-center p-6 font-outfit mb-32">
      <div className=" items-start w-full max-w-4xl">
        <h2 className="text-2xl">Let’s discuss the details</h2>
        <p className=" mb-8">Our friendly team would love to hear from you.</p>

      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="  w-full max-w-4xl p-10 bg-black/20 border-1 border-slate-50/5  rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full bg-neutral-950 border-1 border-slate-50/10 p-2 rounded-md mt-1 text-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="info@gmail.com"
              className="w-full bg-neutral-950  border-1 border-slate-50/10 p-2 rounded-md mt-1 text-white"
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-neutral-950 border-1 border-slate-50/10 p-2 rounded-md mt-1 text-white"
            required
          />
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hello..."
            rows={4}
            className="w-full bg-neutral-950 border-1 border-slate-50/10 p-2 rounded-md mt-1 text-white"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md border border-gray-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Contact Info Section */}
      <div className="mt-14 w-full max-w-3xl flex flex-col md:flex-row justify-between text-gray-400 text-sm gap-4">
        <div>
          <p className="font-semibold text-white! mb-2">Join us</p>
          <p>theforgebd@gmail.com</p>
        </div>

        <div>
          <p className="font-semibold text-white! mb-2 ">Call</p>
          <p>+880 1854 666 866</p>
        </div>

        <div>
          <p className="font-semibold text-white! mb-2">Address</p>
          <p>Chattogram, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
