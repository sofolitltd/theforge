"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null); // Reset message before submission

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setMessage({ text: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setMessage({ text: "Failed to send message. Please try again.", type: "error" });
      }
    } catch (error) {
      console.log(error);
      setMessage({ text: "An error occurred. Please try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white flex flex-col items-center p-6 font-outfit mb-32">
      <div className="items-start w-full max-w-4xl">
        <h2 className="text-2xl">Let’s discuss the details</h2>
        <p className="mb-8">Our friendly team would love to hear from you.</p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-10 bg-black/20 border border-slate-50/5 rounded-lg"
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
              className="w-full bg-neutral-950 border border-slate-50/10 p-2 rounded-md mt-1 text-white"
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
              className="w-full bg-neutral-950 border border-slate-50/10 p-2 rounded-md mt-1 text-white"
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
            className="w-full bg-neutral-950 border border-slate-50/10 p-2 rounded-md mt-1 text-white"
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
            className="w-full bg-neutral-950 border border-slate-50/10 p-2 rounded-md mt-1 text-white"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 w-full font-outfit text-base px-6 py-2 border-2 border-white/10 rounded-[10px] bg-gradient-to-r from-[#0e0e0e] via-[#363636] to-[#0e0e0e] text-white opacity-100 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>

      {/* Contact Info Section */}
      <div className="mt-14 w-full max-w-3xl flex flex-col md:flex-row justify-between text-gray-400 text-sm gap-4">
        <div>
          <p className="font-semibold text-white! mb-2">Join us</p>
          <p>theforgebd@gmail.com</p>
        </div>

        <div>
          <p className="font-semibold text-white! mb-2">Call</p>
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
