"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-50 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gray-800 mb-10 text-center font-poppins drop-shadow-lg"
        >
          <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 bg-clip-text text-transparent">
            About Us
          </span>
        </motion.h2>

        {/* Introduction Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed shadow-sm">
            We are an Australian-based company, proud to be part of Australia’s
            vibrant community. With over 5 years of experience in the travel
            industry, we’ve been committed to providing reliable, safe, and
            comfortable travel experiences. Now, we’re excited to take our
            services online, making it easier for you to book, plan, and travel
            with us from anywhere in the world.
          </p>
        </motion.div>

        {/* Our Story Section */}
        <section className="mb-20">
          <motion.h3
            className="text-4xl font-semibold text-gray-800 text-center mb-10 font-poppins drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Journey
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Our Roots */}
            <motion.div
              className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col justify-between items-center hover:scale-[1.03] transition duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-3xl font-semibold text-gray-700 mb-4 drop-shadow-sm">
                Our Roots
              </h4>
              <p className="text-gray-600 text-lg text-center leading-relaxed">
                Founded by Australians, for Australians, we began our journey 5
                years ago with a mission to provide affordable and comfortable
                travel options for everyone. From humble beginnings, we've grown
                into a trusted brand known for reliability and care.
              </p>
            </motion.div>

            {/* Our Growth */}
            <motion.div
              className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col justify-between items-center hover:scale-[1.03] transition duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-3xl font-semibold text-gray-700 mb-4 drop-shadow-sm">
                Our Growth
              </h4>
              <p className="text-gray-600 text-lg text-center leading-relaxed">
                Over the years, we've built lasting relationships with our
                customers and partners. With growing demand, we’re now online —
                ready to serve you better with a few effortless clicks.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <motion.h3
            className="text-4xl font-semibold text-gray-800 text-center mb-10 font-poppins drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Affordable Travel",
                desc: "Competitive prices and seamless travel experiences, designed for comfort and reliability.",
              },
              {
                title: "Reliable Fleet",
                desc: "From everyday rides to premium vehicles — we maintain a top-notch fleet for every occasion.",
              },
              {
                title: "Seamless Booking",
                desc: "With our new online platform, booking is just a few clicks away — easy, fast, and secure.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-xl rounded-3xl p-8 text-center hover:scale-[1.03] transition duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-3 drop-shadow">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <motion.h3
            className="text-4xl font-semibold text-gray-800 mb-10 text-center font-poppins drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us?
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Our goal is simple: to provide safe, affordable, and premium travel
            experiences for all Australians. As a family-owned company, we focus
            on personalized service and genuine care. With over 5 years of
            experience, we’re ready to take your journey to the next level.
          </motion.p>
        </section>

        {/* Contact */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to book your next trip with us? <br />
            Visit our{" "}
            <a
              href="/contact-us"
              className="text-yellow-600 font-semibold underline underline-offset-4 hover:text-yellow-700"
            >
              Contact
            </a>{" "}
            page to get in touch and learn more.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
