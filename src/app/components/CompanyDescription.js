import React from "react";
import "animate.css"; // Import animate.css for animations

const CompanyDescription = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/2 animate__animated animate__fadeIn animate__delay-1s">
            <img
              src="https://plus.unsplash.com/premium_photo-1661380236937-c93494cb7f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRheGl8ZW58MHwwfDB8fHww"
              alt="Company"
              className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* Description */}
          <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeIn animate__delay-1s">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4 leading-tight">
              About Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 px-4 lg:px-0">
              At Canberra Express, we are committed to providing the best car
              rental services in the heart of Canberra. Our goal is to ensure
              that every customer experiences comfort, reliability, and
              flexibility throughout their journey. Whether you are a local
              resident or a visitor, we are here to help you explore the city
              with ease and style.
            </p>

            {/* Centered Learn More Button */}
            <div className="flex justify-center">
              <a
                href="/about"
                className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition-all transform hover:scale-110 animate__animated animate__fadeIn animate__delay-2s"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
