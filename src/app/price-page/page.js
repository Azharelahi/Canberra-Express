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
            <Card
              title="OZLYFT"
              duration="Approximately 3 hours"
              route="CBR-SYD"
              price={
              <div className="flex items-center gap-2">
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-gray-400 line-through text-lg"
  >
    $399
  </motion.span>

  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: [1, 1.1, 1],
      textShadow: [
        "0 0 0px #facc15",
        "0 0 6px #facc15",
        "0 0 0px #facc15",
      ],
    }}
    transition={{
      duration: 1.2,
      ease: "easeOut",
      delay: 0.4,
      repeat: Infinity,
      repeatDelay: 4, // small pause between glow pulses
    }}
    className="text-yellow-600 font-bold text-xl"
  >
    $360 (AUD)
  </motion.span>
</div>
              }
            />
            <Card
              title="Fly"
              duration="Approximately 3 hours"
              route="SYD-CBR"
              price="$375 - $1000 (AUD)"
            />
            <Card
              title="Ride Share Companies"
              duration="Approximately 3 hours"
              route="SYD-CBR"
              price="$550 – $700 (AUD)"
            />
          </div>
        </motion.div>

        {/* Our Services Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-12 text-center font-poppins drop-shadow-[0_3px_6px_rgba(0,0,0,0.2)]"
          >
            Our Services
          </motion.h3>

          {/* Intro paragraph */}
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
            Whether you’re heading to the airport, commuting across Canberra, or
            taking a day trip to Sydney
            <span className="font-semibold text-yellow-500">OZLYFT</span>
            offers a range of reliable car hire options to suit your comfort and
            budget.
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-yellow-300 transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Standard Service
              </h4>
              <p className="text-gray-600 text-base mb-4">
                5-seater sedan or hatchback — perfect for city rides, airport
                transfers, and daily travel with great comfort.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 font-medium">SYD - CAN</p>
                <p className="text-xl font-bold text-yellow-500">{`$399 (AUD)`}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-yellow-300 transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Premium Service
              </h4>
              <p className="text-gray-600 text-base mb-4">
                Mid-size to large SUV with extra space, smooth ride, and
                top-tier comfort for business or family travel.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 font-medium">SYD - CAN</p>
                <p className="text-xl font-bold text-yellow-500">{`$750 (AUD)`}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-yellow-300 transition-all duration-300"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                XL SUV Service
              </h4>
              <p className="text-gray-600 text-base mb-4">
                Spacious 7-seater SUV — ideal for groups, families, or travelers
                with luggage who prefer room and comfort.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-500 font-medium">SYD - CAN</p>
                <p className="text-xl font-bold text-yellow-500">{`$750 (AUD)`}</p>
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <p className="text-center text-gray-600 mt-10 text-sm">
            All prices are fixed for Canberra, Sydney routes — no hidden fees,
            just book and go.
          </p>
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
            We offer the most competitive prices for high-quality services,
            ensuring you have a comfortable and reliable journey. Our fleet
            includes a variety of vehicles to suit your needs, from standard to
            premium options. Book with us for a seamless, luxurious experience —
            every time.
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
