"use client";
import React, { useState, useEffect } from "react";
import "animate.css";
import Aos from "aos";

const CompanyDescription = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
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
              alt="OZLYFT Cars"
              className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Description */}
          <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-center text-4xl font-bold text-yellow-500 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 px-4 lg:px-0">
              At <span className="font-semibold text-yellow-500">OZLYFT</span>, we make urban travel effortless with our premium{" "}
              <span className="font-semibold">car rental and rideshare services</span> operating across{" "}
              <span className="font-semibold">Canberra, Sydney</span>. Whether you need a compact hatchback for quick errands or a 7-seater SUV for family trips, we offer a modern, reliable, and affordable fleet tailored to your lifestyle.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all transform hover:scale-110 animate__animated animate__fadeIn animate__delay-2s"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-10 backdrop-blur-md bg-white/10 transition-all duration-300">
          <div className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] p-6 md:p-10 text-gray-800 animate__animated animate__fadeInUp">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-6 text-gray-600 text-2xl font-bold hover:text-red-400 transition"
            >
              &times;
            </button>

            <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center mt-8 sm:mt-0">
              Welcome to OZLYFT
            </h2>

            {/* Our Vision */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6" data-aos="fade-up">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">🌟 Our Vision</h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                Our vision is to redefine mobility across Australia by combining{" "}
                <span className="font-semibold">smart technology, flexible rentals, and community-driven rideshare solutions</span>. 
                We aim to make every journey seamless, affordable, and sustainable.
              </p>
            </div>

            {/* What We Offer */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">🚗 What We Offer</h3>
              <ul className="list-disc pl-6 text-gray-800 space-y-2">
                <li>Instant car hire and rideshare options in Canberra, Sydney</li>
                <li>Flexible rental durations — hourly, daily, or weekly</li>
                <li>Wide range of vehicles: compact, sedan, SUV, and family vans</li>
                <li>Transparent pricing with zero hidden fees</li>
                <li>24/7 roadside assistance and customer support</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">💼 Why Choose Us</h3>
              <p className="text-gray-800">
                OZLYFT stands out with its local expertise and customer-first approach. 
                We don’t just provide cars — we connect communities. Whether you’re a tourist exploring Sydney, 
                a local commuting in Canberra, our rides are built 
                for your comfort, safety, and convenience.
              </p>
            </div>

            {/* Testimonials */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">❤️ Client Love</h3>
              <blockquote className="italic text-gray-700">
                “OZLYFT made my Sydney trip completely stress-free! The booking was smooth, 
                the car was spotless, and their support team was super helpful. Highly recommended.”
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDescription;
