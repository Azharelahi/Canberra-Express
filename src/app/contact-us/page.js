"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

// Define variants for fade-in animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function ContactUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-400 bg-clip-text text-transparent text-center mb-16 drop-shadow-xl font-poppins"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          Get in Touch With Us
        </motion.h2>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
          {/* Office Location */}
          <motion.div
            className="bg-white shadow-xl hover:shadow-yellow-400 rounded-3xl p-8 transition-shadow duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-map-marker-alt text-yellow-500 text-3xl mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 font-poppins drop-shadow-sm">
                Our Office
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              OZLYFT, 21 Mary Gillespie Avenue,<br />
              Gungahlin, Canberra, ACT, Australia
            </p>
            <p className="mt-4 text-sm text-gray-500 text-center">We welcome you anytime!</p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-white shadow-xl hover:shadow-yellow-400 rounded-3xl p-8 transition-shadow duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-phone-alt text-yellow-500 text-3xl mr-3"></i>
              <h3 className="text-3xl font-bold text-gray-900 font-poppins drop-shadow-sm">
                Contact Us
              </h3>
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <i className="fas fa-phone text-yellow-500 text-2xl"></i>
              <a
                href="tel:+61451107931"
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                +61 451 107 931
              </a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-envelope text-yellow-500 text-2xl"></i>
              <a
                href="mailto:canberraexpress@gmail.com"
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                ozlyft@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Office Hours */}
      <motion.div
  className="bg-white shadow-xl rounded-3xl p-10 mb-20 hover:shadow-yellow-400 transition-shadow duration-300"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeInUp}
  transition={{ delay: 0.6 }}
>
  <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center font-poppins drop-shadow-sm">
    Office Hours
  </h3>

  {/* Business Description */}
  <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto mb-10 px-4">
    Our team at <span className="font-semibold text-yellow-500">OZLYFT</span> is always ready to assist you — whether you need 
    help booking a ride, renting a car, or getting travel support across{" "}
    <span className="font-semibold">Canberra, Sydney, and NSW</span>. 
    We’re committed to delivering reliable, on-time, and friendly service every day of the week.
  </p>

  {/* Timings */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    {[
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed (24/7 Online Support Available)" },
    ].map(({ day, time }, idx) => (
      <div
        key={idx}
        className="bg-yellow-50 rounded-2xl py-6 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="flex justify-center items-center gap-2 text-yellow-500 text-xl mb-2">
          <i className="fas fa-clock" />
          <p className="text-gray-800 font-semibold">{day}</p>
        </div>
        <p className="text-md text-gray-600">{time}</p>
      </div>
    ))}
  </div>

  {/* Support Info */}
  <p className="text-center text-gray-600 mt-10 text-sm sm:text-base">
    For urgent inquiries or roadside support, contact us anytime via{" "}
    <span className="font-semibold text-yellow-500">WhatsApp or our 24/7 helpline</span>. 
    We’re here to keep your journey smooth, safe, and stress-free.
  </p>
</motion.div>


        {/* Google Map */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-yellow-400 transition-shadow duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center font-poppins drop-shadow-sm">
            Find Us On The Map
          </h3>
          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border-4 border-yellow-200 shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.3199759658365!2d149.12807831558627!3d-35.30828398066989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164da772ac38b7%3A0x2f478d68e79d81b1!2sCanberra%20Express!5e0!3m2!1sen!2sau!4v1621926430465!5m2!1sen!2sau"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
