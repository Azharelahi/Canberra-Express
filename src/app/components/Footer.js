"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-4">Canberra Express</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for car rentals in Canberra. Fast, reliable,
              and affordable.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/price-page"
                  className="text-gray-400 hover:text-white"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/faq-page"
                  className="text-gray-400 hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="flex justify-center sm:justify-start items-center text-gray-400 mb-4">
              <FaPhone size={20} className="mr-3" />
              <span>(+61) 451107931</span>
            </div>
            <div className="flex justify-center sm:justify-start items-center text-gray-400">
              <FaEnvelope size={20} className="mr-3" />
              <span>support@canberraexpress.com.au</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest deals and offers.
            </p>
            <form
              action="#"
              method="POST"
              className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 items-center"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 w-full sm:w-auto text-gray-800 rounded-l-md mb-4 sm:mb-0"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white p-3 rounded-r-md hover:bg-yellow-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Canberra Express. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
