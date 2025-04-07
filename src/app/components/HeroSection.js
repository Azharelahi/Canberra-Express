import React from "react";
import "animate.css";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center overflow-y-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1482029255085-35a4a48b7084?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRheGl8ZW58MHwwfDB8fHww)",
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Keeps the image centered
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-wide mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Canberra Express
        </h1>
        <p className="text-xl sm:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Your trusted car rental service in Canberra. Explore the city in
          comfort and style!
        </p>
        <a
          href="/contact-us"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105 animate__animated animate__headShake animate__infinite animate__delay-1s"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
