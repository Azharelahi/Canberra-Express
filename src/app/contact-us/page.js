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
            className="bg-white shadow-2xl rounded-3xl p-8 text-center hover:shadow-yellow-400 transition-shadow duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-poppins drop-shadow-sm">
              Our Office
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Canberra Express, 21 Mary Gillespie Avenue, Gungahlin, Canberra, ACT, Australia
            </p>
            <div className="text-4xl text-yellow-500 mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="text-sm text-gray-500">We welcome you anytime!</p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            className="bg-white shadow-2xl rounded-3xl p-8 text-center hover:shadow-yellow-400 transition-shadow duration-300 transform hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-poppins drop-shadow-sm">
              Contact Details
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Connect with us for any queries or bookings.
            </p>
            <div className="flex justify-center items-center gap-3 mb-4">
              <i className="fas fa-phone-alt text-yellow-500 text-2xl"></i>
              <a
                href="tel:+61451107931"
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                +61 451107931
              </a>
            </div>
            <div className="flex justify-center items-center gap-3">
              <i className="fas fa-envelope text-yellow-500 text-2xl"></i>
              <a
                href="mailto:canberraexpress@gmail.com"
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition-colors duration-300"
              >
                canberraexpress@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Office Hours */}
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center font-poppins drop-shadow-sm">
            Office Hours
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[ 
              { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
              { day: "Saturday", time: "10:00 AM - 4:00 PM" },
              { day: "Sunday", time: "Closed" },
            ].map(({ day, time }, idx) => (
              <div key={idx}>
                <div className="flex justify-center items-center gap-2 text-yellow-500 text-xl mb-2">
                  <i className="fas fa-clock" />
                  <p className="text-gray-700 font-semibold">{day}</p>
                </div>
                <p className="text-md text-gray-600">{time}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="bg-white shadow-2xl rounded-3xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 text-center font-poppins drop-shadow-sm">
            Find Us On The Map
          </h3>
          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border-4 border-yellow-200 shadow-xl">
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
