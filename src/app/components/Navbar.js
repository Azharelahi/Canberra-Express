"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
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

            {/* AUTH BUTTON */}
            {status !== "loading" &&
              (session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="ml-4 px-5 py-2 font-semibold rounded-xl text-white bg-yellow-400 bg-opacity-30 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:bg-yellow-400 hover:bg-opacity-40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {getFirstName(session.user.name)}
                </button>
              ) : (
                <button
                  onClick={() => signIn("google")}
                  className="ml-4 px-5 py-2 font-semibold rounded-xl text-white bg-yellow-400 bg-opacity-30 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:bg-yellow-400 hover:bg-opacity-40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  Sign In
                </button>
              ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            {status !== "loading" &&
              (session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 font-medium rounded-xl text-white bg-yellow-400 bg-opacity-30 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-opacity-40 transition-all duration-300 cursor-pointer"
                >
                  {getFirstName(session.user.name)}
                </button>
              ) : (
          <button
  onClick={() => signIn("google")}
  className="
    relative overflow-hidden
    ml-4 px-7 py-2.5 rounded-2xl
    font-semibold text-white tracking-wide

    bg-gradient-to-r from-yellow-400/30 via-yellow-300/40 to-yellow-400/30
    backdrop-blur-xl border border-white/30

    shadow-lg shadow-yellow-400/40
    transition-all duration-300 ease-out

    hover:shadow-xl hover:shadow-yellow-400/60
    hover:-translate-y-1 hover:scale-[1.03]

    active:scale-[0.97] active:translate-y-0

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-yellow-400/60

    cursor-pointer
  "
>
  {/* shimmer layer */}
  <span
    className="
      pointer-events-none absolute inset-0
      bg-gradient-to-r from-transparent via-white/30 to-transparent
      translate-x-[-100%]
      hover:translate-x-[100%]
      transition-transform duration-700 ease-in-out
    "
  />

  {/* glow pulse */}
  <span
    className="
      pointer-events-none absolute inset-0 rounded-2xl
      animate-pulse bg-yellow-400/10
    "
  />

  {/* text */}
  <span className="relative z-10">Sign In</span>
</button>


              ))}
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
        className={`fixed top-0 right-0 h-full w-[70%] bg-white/30 backdrop-blur-lg shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
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
