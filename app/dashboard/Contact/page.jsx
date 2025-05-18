'use client'
import React, { useState } from 'react';

import {
  Send,
} from 'lucide-react';

function page() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:Mishrasuyash013@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  };

  return (
    <div className=' w-full h-screen bg-secondary rounded-3xl shadow-lg'>

      <section className="py-10 bg-white" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bebas text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Have questions or feedback? Send us a message.</p>
            <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">Got any Idea or Business Proposal? Contact us.</p>
          </div>

          <div className="bg-gray-50 hover:shadow-md font-montserrat rounded-xl p-8 shadow-sm">
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-md font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page