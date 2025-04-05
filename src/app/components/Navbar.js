"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Correct Heroicons v2 import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Prices", href: "/prices" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="navbar bg-cream-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-yellow-500">
            <Link href="/">Canberra Express</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-black hover:text-yellow-500 font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6 transition-all duration-300 ease-in-out transform hover:scale-110" />
              ) : (
                <MenuIcon className="h-6 w-6 transition-all duration-300 ease-in-out transform hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute inset-x-0 top-16 bg-cream-white px-4 py-2 space-y-2 transform transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isOpen &&
          navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-black hover:text-yellow-500 font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
