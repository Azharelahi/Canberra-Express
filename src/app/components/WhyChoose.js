"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Add icons for each card
import {
  FaCar,
  FaMoneyBillAlt,
  FaHeadset,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      id: 0,
      icon: <FaCar size={30} />,
      title: "Wide Fleet of Vehicles",
      description:
        "Choose from a variety of vehicles, from compact cars to luxury options, tailored for your travel needs in Canberra.",
    },
    {
      id: 1,
      icon: <FaMoneyBillAlt size={30} />,
      title: "Affordable Rates",
      description:
        "Get the best deals in Canberra with our competitive pricing and flexible rental options.",
    },
    {
      id: 2,
      icon: <FaHeadset size={30} />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated team is available anytime to help with your rental needs, ensuring a seamless experience.",
    },
    {
      id: 3,
      icon: <FaShieldAlt size={30} />,
      title: "Fully Insured Rentals",
      description:
        "All of our rentals come fully insured, giving you peace of mind on your travels around Canberra.",
    },
    {
      id: 4,
      icon: <FaStar size={30} />,
      title: "Trusted by Locals & Tourists",
      description:
        "Join hundreds of satisfied customers who trust us for their car rental needs, both local and visiting travelers.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Canberra Express?
        </h2>

        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: { perPage: 4 },
              991: { perPage: 3 },
              600: { perPage: 2 },
              480: { perPage: 1 },
            },
            autoScroll: {
              speed: 1, // Adjust speed (higher = faster)
            },
          }}
          extensions={{ AutoScroll }}
        >
          {features.map((feature, index) => (
            <SplideSlide key={index}>
              <div className="relative flex flex-col items-center justify-between p-6 bg-white rounded-xl shadow-lg bg-opacity-20 backdrop-blur-md hover:scale-105 transition-all duration-300 ease-in-out h-80">
                <div className="bg-yellow-500 p-4 rounded-full text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
                <div
                  className="absolute inset-0 bg-opacity-10 bg-center bg-no-repeat bg-cover rounded-xl z-0"
                  style={{
                    backgroundImage: "url('/path-to-your-logo-image.png')",
                  }}
                ></div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default WhyChoose;
