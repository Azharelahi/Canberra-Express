"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [showLoginHint, setShowLoginHint] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Prices", href: "/price-page" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "FAQ", href: "/faq-page" },
  ];

  const getFirstName = (fullName) => fullName?.split(" ")[0] || "";

const AuthButton = ({ className = "" }) => {
  if (status === "loading") return null;
  return session?.user ? (
    <button
      onClick={() => signOut()}
      className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold rounded-xl sm:rounded-2xl
                 bg-[#FFF7E8] text-yellow-600 border border-yellow-400/40 shadow-md shadow-yellow-400/20
                 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-xl hover:shadow-yellow-400/40
                 active:scale-[0.95] transition-all duration-300 ${className}`}
    >
      {getFirstName(session.user.name)}
    </button>
  ) : (
    <button
      onClick={() => signIn("google")}
      className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold rounded-xl sm:rounded-2xl
                 bg-[#FFF7E8] text-yellow-600 border border-yellow-400/40 shadow-md shadow-yellow-400/20
                 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-xl hover:shadow-yellow-400/40
                 active:scale-[0.95] transition-all duration-300 ${className}`}
    >
      Sign In
    </button>
  );
};


  return (
    <nav className="bg-cream-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 gap-y-[10px] h-full"
          >
            <span className="text-2xl font-extrabold text-yellow-500 animate-pulse leading-none">
              OZLYFT
            </span>
            <span className="text-[10px] sm:text-sm text-gray-600 italic font-medium tracking-wide font-poppins animate-slogan leading-none text-center">
              Ride Smart. Ride Fast. Ride Canberra.
            </span>
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
            <AuthButton className="ml-4" />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            <AuthButton />
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none z-[60]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white/30 backdrop-blur-lg shadow-lg z-40 transform transition-transform duration-300 ease-in-out flex flex-col items-start p-8 space-y-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
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

      {/* Overlay */}
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
