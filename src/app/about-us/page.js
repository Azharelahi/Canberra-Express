"use client";

import { useEffect } from "react";

export default function AboutUsPage() {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-50 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-yellow-600 mb-8 text-center font-poppins animate__animated animate__fadeIn">
          About Us
        </h2>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are an Australian-based company, proud to be part of Australia’s
            vibrant community. With over 5 years of experience in the travel
            industry, we’ve been committed to providing reliable, safe, and
            comfortable travel experiences. Now, we’re excited to take our
            services online, making it easier for you to book, plan, and travel
            with us from anywhere in the world.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-semibold text-gray-800 text-center mb-8 font-poppins animate__animated animate__fadeInUp">
            Our Journey
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300 animate__animated animate__fadeInLeft">
              <h4 className="text-3xl font-semibold text-gray-700 mb-4">
                Our Roots
              </h4>
              <p className="text-gray-600 text-lg">
                Founded by Australians, for Australians, we began our journey 5
                years ago with a mission to provide affordable and comfortable
                travel options for everyone. From humble beginnings, we've
                expanded our fleet and services, and now we’re proud to serve
                our customers with the utmost dedication and care.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300 animate__animated animate__fadeInRight">
              <h4 className="text-3xl font-semibold text-gray-700 mb-4">
                Our Growth
              </h4>
              <p className="text-gray-600 text-lg">
                Over the years, we've built lasting relationships with our
                customers and partners. With increasing demand and a growing
                network, we’ve decided to bring our services online, making it
                easier to connect with us and book your next journey with just a
                few clicks.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-semibold text-gray-800 text-center mb-8 font-poppins animate__animated animate__fadeInUp">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-3xl p-8 text-center transition-all transform hover:scale-105 duration-300 animate__animated animate__fadeIn">
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Affordable Travel
              </h4>
              <p className="text-gray-600 text-lg">
                We provide the most competitive prices for high-quality
                services, ensuring a seamless and stress-free travel experience
                for all our customers.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-3xl p-8 text-center transition-all transform hover:scale-105 duration-300 animate__animated animate__fadeIn">
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Reliable Fleet
              </h4>
              <p className="text-gray-600 text-lg">
                Our fleet is carefully maintained to ensure safety, comfort, and
                efficiency. From standard rides to luxury options, we have a
                vehicle to suit every need.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-3xl p-8 text-center transition-all transform hover:scale-105 duration-300 animate__animated animate__fadeIn">
              <h4 className="text-2xl font-semibold text-gray-700 mb-4">
                Seamless Booking
              </h4>
              <p className="text-gray-600 text-lg">
                With our new online platform, booking your next journey with us
                has never been easier. A few clicks, and you’re on your way to
                your next adventure.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h3 className="text-4xl font-semibold text-gray-800 mb-8 text-center font-poppins animate__animated animate__fadeInUp">
            Why Choose Us?
          </h3>
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our goal is simple: to provide safe, affordable, and high-quality
              travel experiences for all Australians. As a family-owned and
              operated business, we’re committed to delivering the best service,
              personalized attention, and care to every passenger. With over 5
              years of experience in the travel industry, we have the expertise
              and dedication to make your journey a pleasant one. Join us as we
              take our services online to connect with more customers across
              Australia and beyond!
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to book your next trip with us? <br /> Visit our{" "}
            <a href="/contact" className="text-yellow-500 hover:underline">
              Contact
            </a>{" "}
            page to get in touch and learn more about our services.
          </p>
        </div>
      </div>
    </div>
  );
}
