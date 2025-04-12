"use client";
import React, { useRef } from "react";
import "animate.css";
import { motion } from "framer-motion";

const headingWords = [
  "Welcome", "to", "Canberra", "Express"
];
const subText = [
  "Your", "trusted", "car", "rental", "service", "in", "Canberra."
];

const HeroSection = () => {
  // Create a reference for the BookingForm component
  const bookingFormRef = useRef(null);

  // Scroll to the BookingForm when Book Now button is clicked
  const scrollToBookingForm = () => {
    bookingFormRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1482029255085-35a4a48b7084?w=600&auto=format&fit=crop&q=60)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 font-[var(--font-geist-sans)] leading-tight tracking-wide">
          {headingWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="text-lg sm:text-2xl mb-8 font-[var(--font-geist-sans)] text-gray-200">
          {subText.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <a
          href="#"
          onClick={scrollToBookingForm}
          className="animate__animated animate__zoomInDown animate__delay-2s px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg transition-all duration-300 font-[var(--font-geist-mono)]"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
