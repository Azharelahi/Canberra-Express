"use client";
import React, { useState, useEffect } from "react";
import "animate.css";
import Aos from "aos";

const CompanyDescription = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once while scrolling down
    });
  }, []);
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/2 animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="https://plus.unsplash.com/premium_photo-1661380236937-c93494cb7f71?w=600&auto=format&fit=crop&q=60"
              alt="Company"
              className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Description */}
          <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-center text-4xl font-bold text-yellow-500 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 px-4 lg:px-0">
              At Canberra Express, we provide top-tier car rentals in the heart
              of Canberra, combining style, safety, and affordability.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all transform hover:scale-110 animate__animated animate__fadeIn animate__delay-2s"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL with Glassmorphism */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-10 backdrop-blur-md bg-white/10 transition-all duration-300">
          <div className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-6 md:p-10 text-gray-800 animate__animated animate__fadeInUp">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className=" absolute top-4 right-6 text-gray-600 text-2xl font-bold hover:text-red-400 transition"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center mt-8 sm:mt-0">
              Welcome to Canberra Express
            </h2>

            {/* Card 1: Our Vision */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                🌟 Our Vision
              </h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Our vision is to revolutionize urban mobility by offering smart,
                stylish, and sustainable car rental solutions. We believe in
                accessibility, convenience, and eco-conscious travel.
              </p>
            </div>

            {/* Card 2: What We Offer */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                🚗 What We Offer
              </h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Modern fleet of vehicles for every need</li>
                <li>Flexible rental packages (hourly, daily, weekly)</li>
                <li>Affordable pricing with no hidden charges</li>
                <li>24/7 customer and roadside support</li>
              </ul>
            </div>

            {/* Card 3: Why Choose Us */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                💼 Why Choose Us
              </h3>
              <p className="text-gray-800">
                We're not just a rental service — we're your travel partners.
                From seamless booking to luxurious rides, we offer a premium
                experience with a local touch.
              </p>
            </div>

            {/* Card 4: Testimonials */}
            <div
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                ❤️ Client Love
              </h3>
              <blockquote className="italic text-gray-700">
                “Canberra Express made my trip so much smoother! The car was
                spotless, the process was effortless, and the service was
                top-notch.”
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDescription;
