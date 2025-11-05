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
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            About Us
          </span>
        </motion.h2>

        {/* Introduction */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed shadow-sm">
            OZLYFT is Canberra’s trusted car hire service — built for locals, by locals. 
            For over 5 years, we’ve focused on one simple idea: make it effortless to hire a car, 
            hit the road, and go wherever life takes you. 
            Now, with our easy online platform, you can book your ride in seconds and start your journey right away.
          </p>
        </motion.div>

        {/* Our Journey */}
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
                Born in Canberra, OZLYFT began with a vision to make car hire fast, flexible, 
                and completely hassle-free. 
                From our very first day, we’ve focused on delivering clean, well-maintained cars 
                and friendly local support — so you can just book and go.
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
                As word spread, OZLYFT became a local favourite for quick and reliable car hire. 
                Today, we’re proud to serve individuals, families, and professionals 
                across Canberra — offering instant online booking, transparent pricing, 
                and a ride-ready fleet that fits every need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Offer */}
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
                title: "Quick Booking",
                desc: "Choose your car, set your time, and confirm in seconds — no long forms or waiting around.",
              },
              {
                title: "Reliable Cars",
                desc: "Every vehicle in our fleet is carefully maintained and inspected for a smooth driving experience.",
              },
              {
                title: "Local Support",
                desc: "We’re Canberra locals — ready to assist whenever you need help or guidance on the go.",
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
            OZLYFT makes car hire refreshingly simple. 
            We don’t do complications — just reliable cars, 
            fair prices, and instant booking. 
            Whether it’s a quick errand or a weekend trip, 
            you can count on us for a smooth “book and go” experience every time.
          </motion.p>
        </section>

        {/* Contact Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to hit the road? <br />
            Visit our{" "}
            <a
              href="/contact-us"
              className="text-yellow-600 font-semibold underline underline-offset-4 hover:text-yellow-700"
            >
              Contact
            </a>{" "}
            page to book your next car hire with ease.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
