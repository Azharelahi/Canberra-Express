"use client";

import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-50 py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-yellow-600 mb-12 text-center font-poppins"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get in Touch with Us
        </motion.h2>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {/* Address Card */}
          <motion.div
            className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center transition-all transform hover:scale-105 duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 font-poppins">Our Office</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Canberra Express, 123 Travel Lane, Canberra, ACT, Australia
            </p>
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="text-sm text-gray-500">Visit us for any inquiries or just to say hello!</p>
          </motion.div>

          {/* Phone & Email Card */}
          <motion.div
            className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col items-center text-center transition-all transform hover:scale-105 duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 font-poppins">Contact Details</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              Reach out to us via phone or email for any inquiries or assistance.
            </p>
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-4">+61 412 345 678</p>
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <p className="text-xl font-semibold text-gray-700">support@canberraexpress.com</p>
          </motion.div>
        </div>

        {/* Office Hours Section */}
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
       <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 text-center font-poppins">
  Our Office Hours
</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
  <div>
    <p className="text-lg sm:text-xl text-gray-600 font-semibold">Monday - Friday</p>
    <p className="text-lg sm:text-xl text-gray-600">9:00 AM - 6:00 PM</p>
  </div>
  <div>
    <p className="text-lg sm:text-xl text-gray-600 font-semibold">Saturday</p>
    <p className="text-lg sm:text-xl text-gray-600">10:00 AM - 4:00 PM</p>
  </div>
  <div>
    <p className="text-lg sm:text-xl text-gray-600 font-semibold">Sunday</p>
    <p className="text-lg sm:text-xl text-gray-600">Closed</p>
  </div>
</div>

        </motion.div>

        {/* Google Map Section */}
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-8 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6 text-center font-poppins">
            Find Us On The Map
          </h3>
          <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg shadow-lg">
            {/* Embed Google Maps here with a focus on Canberra */}
            <iframe
              title="Google Map"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.3199759658365!2d149.12807831558627!3d-35.30828398066989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164da772ac38b7%3A0x2f478d68e79d81b1!2sCanberra%20Express!5e0!3m2!1sen!2sau!4v1621926430465!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
