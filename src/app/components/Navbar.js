"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Prices", href: "/price-page" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "FAQ", href: "/faq-page" },
  ];

  return (
    <nav className="bg-cream-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-yellow-500 animate-pulse"
          >
            Canberra Express
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-black font-medium transition duration-300 transform hover:text-yellow-500 hover:scale-105 ${
                  pathname === link.href ? "text-yellow-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Auth buttons */}
            <SignedOut>
              <SignInButton>
                <button className="cursor-pointer ml-4 px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile: Sign In & Hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-3 py-1.5 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none z-[60]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
     {/* Mobile Sidebar Menu */}
<div
  className={`fixed top-0 right-0 h-full w-[70%] 
    bg-white/30 backdrop-blur-lg 
    shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } flex flex-col items-start p-8 space-y-6`}
>
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      onClick={() => setIsOpen(false)}
      className={`text-black text-xl font-semibold hover:text-yellow-500 transition transform hover:scale-110 ${
        pathname === link.href ? "text-yellow-500" : ""
      }`}
    >
      {link.name}
    </Link>
  ))}
</div>


      {/* Optional: Dark overlay behind the sidebar */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/30 z-30 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
