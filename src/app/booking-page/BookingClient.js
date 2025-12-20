"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useSession } from "next-auth/react"; // Import NextAuth hook

export default function BookingClient() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession(); // Get session data
  const [isLoading, setIsLoading] = useState(false);

  const pickAddress = searchParams.get("pickAddress");
  const dropAddress = searchParams.get("dropAddress");
  const pickupDate = searchParams.get("pickupDate");
  const pickupTime = searchParams.get("pickupTime");
  const carName = searchParams.get("carName");

  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Check if user is logged in
  const isLoggedIn = status === "authenticated" && session?.user;

  // Auto-fill form data based on session or localStorage
  useEffect(() => {
    if (isLoggedIn) {
      // If user is logged in, pre-fill from session
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
        phone: "", // Phone still needs to be entered
      });
    } else {
      // If not logged in, try to load from localStorage
      const saved = localStorage.getItem("bookingUserInfo");
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    }
  }, [isLoggedIn, session]);

  // Save to localStorage only if user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("bookingUserInfo", JSON.stringify(formData));
    }
  }, [formData, isLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const bookingData = {
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone,
      pickAddress,
      dropAddress,
      pickupDate,
      pickupTime,
      carName,
    };

    try {
      const res = await axios.post(
        "https://canberra-express-backend-git-main-azharelahis-projects.vercel.app/send-booking-email",
        bookingData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Success:", res.data);
      
      // Clear phone but keep name/email if logged in
      if (isLoggedIn) {
        setFormData((prev) => ({ ...prev, phone: "" }));
      } else {
        setFormData({ name: "", email: "", phone: "" });
      }
      
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-6">
            Booking Summary
          </h2>
          <table className="w-full text-left text-gray-700 text-lg">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">
                  Pickup Address:
                </td>
                <td>{pickAddress}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">
                  Drop Address:
                </td>
                <td>{dropAddress}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">
                  Pickup Date:
                </td>
                <td>{pickupDate}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">
                  Pickup Time:
                </td>
                <td>{pickupTime}</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900 py-2 pr-4">
                  Car Model:
                </td>
                <td>{carName}</td>
              </tr>
            </tbody>
          </table>
          <div className="absolute top-0 right-0 opacity-5 text-[8rem] font-bold text-yellow-300 pointer-events-none select-none pr-4 pt-2">
            🚗
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center bg-white shadow-xl rounded-2xl p-6 sm:p-8"
        >
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center flex flex-col items-center justify-center h-full space-y-6"
              >
                <motion.div
                  initial={{ rotate: -20 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-yellow-400"
                >
                  🎉
                </motion.div>
                <motion.h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                  Thank you for your booking!
                </motion.h2>
                <p className="text-lg text-gray-600">
                  We've received your details and will contact you shortly.
                </p>
              </motion.div>
            ) : !showForm ? (
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Proceed and Book via Site
                </button>

                <a
                  href={`https://wa.me/+61451107931?text=Hi, I want to book a car from ${pickAddress} to ${dropAddress} on ${pickupDate} at ${pickupTime}. Car Model: ${carName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-400 text-white text-lg font-semibold py-3 rounded-xl text-center transition-all duration-300 shadow-lg cursor-pointer"
                >
                  Book via WhatsApp
                </a>
              </div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-col gap-4 mt-4"
                onSubmit={handleSubmit}
              >
                {/* Show logged in status */}
                {isLoggedIn && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
                    <p className="text-sm text-green-700 font-medium">
                      ✓ Logged in as {session.user.name}
                    </p>
                  </div>
                )}

                {/* Name Input - Disabled if logged in */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={isLoggedIn}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all font-semibold shadow-md ${
                      isLoggedIn
                        ? "border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                        : "border-yellow-500 focus:ring-yellow-500 text-gray-800"
                    }`}
                  />
                  {isLoggedIn && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      🔒
                    </span>
                  )}
                </div>

                {/* Email Input - Disabled if logged in */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={isLoggedIn}
                    className={`w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all font-semibold shadow-md ${
                      isLoggedIn
                        ? "border-gray-300 bg-gray-100 text-gray-600 cursor-not-allowed"
                        : "border-yellow-500 focus:ring-yellow-500 text-gray-800"
                    }`}
                  />
                  {isLoggedIn && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      🔒
                    </span>
                  )}
                </div>

                {/* Phone Input - Always editable */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full border-2 border-yellow-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-gray-800 font-semibold shadow-md"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`relative flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                    isLoading ? "animate-pulse scale-[0.98]" : "hover:scale-105"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Booking...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}