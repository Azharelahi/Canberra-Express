"use client";

import { useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function PricesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-5xl font-extrabold text-yellow-600 mb-12 text-center font-poppins drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
        >
          Price Comparison
        </motion.h2>

        {/* Competitor Prices Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-10 text-center font-poppins drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
          >
            Competitor Prices
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Canberra Express" duration="Approximately 3 hours" route="CBR-SYD" price="$399 (AUD)" />
            <Card title="Fly" duration="Approximately 3 hours" route="SYD-CBR" price="$375 - $1000 (AUD)" />
            <Card title="Ride Share Companies" duration="Approximately 3 hours" route="SYD-CBR" price="$550 – $700 (AUD)" />
          </div>
        </motion.div>

        {/* Our Services Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-10 text-center font-poppins drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
          >
            Our Services
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Standard Service" duration="One-Way" price="$399 (AUD)" />
            <Card title="Premium Service" duration="One-Way" price="$750 (AUD)" />
            <Card title="XL SUV Service" duration="One-Way" price="$750 (AUD)" />
            <Card title="XL Van Service" duration="One-Way" price="$850 (AUD)" />
            <Card title="XL Mini Bus Service" duration="One-Way" price="$900 (AUD)" />
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-6 text-center font-poppins drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
          >
            Why Choose Us?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed"
          >
            We offer the most competitive prices for high-quality services, ensuring you have a comfortable and reliable journey.
            Our fleet includes a variety of vehicles to suit your needs, from standard to premium options. Book with us for a seamless,
            luxurious experience — every time.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Card Component
function Card({ title, duration, route, price }) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-all transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h4>
      {duration && <p className="text-gray-600">{duration}</p>}
      {route && <p className="text-gray-600">{route}</p>}
      <p className="text-3xl font-bold text-yellow-500 mt-4">{price}</p>
    </motion.div>
  );
}
