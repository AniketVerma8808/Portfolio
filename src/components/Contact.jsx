import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or an API here
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full bg-white px-6 py-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6A5AE0]">Contact Me</h2>
        <p className="text-gray-600 mt-2">Get in touch with me</p>
        <div className="h-1 w-24 bg-[#6A5AE0] mx-auto mt-4 rounded"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-gray-50 shadow-md rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A5AE0]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A5AE0]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#6A5AE0]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#6A5AE0] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
