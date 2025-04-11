"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingClient() {
  const searchParams = useSearchParams();
  const { user, isSignedIn } = useUser();

  const pickLocation = searchParams.get("pickLocation");
  const pickAddress = searchParams.get("pickAddress");
  const dropLocation = searchParams.get("dropLocation");
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

  // Prefill from Clerk user
  useEffect(() => {
    if (isSignedIn && user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullName || "",
        email: user.emailAddresses?.[0]?.emailAddress || "",
        phone: user.phoneNumbers?.[0]?.phoneNumber || "",
      }));
    } else {
      const saved = localStorage.getItem("bookingUserInfo");
      if (saved) setFormData(JSON.parse(saved));
    }
  }, [isSignedIn, user]);

  useEffect(() => {
    localStorage.setItem("bookingUserInfo", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    setFormData({ name: "", email: "", phone: "" });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE: Booking Summary */}
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
                <td className="font-semibold text-gray-900 py-2 pr-4">Pickup City:</td>
                <td>{pickAddress} - {pickLocation}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">Drop City:</td>
                <td>{dropAddress} - {dropLocation}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">Pickup Date:</td>
                <td>{pickupDate}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold text-gray-900 py-2 pr-4">Pickup Time:</td>
                <td>{pickupTime}</td>
              </tr>
              <tr>
                <td className="font-semibold text-gray-900 py-2 pr-4">Car Model:</td>
                <td>{carName}</td>
              </tr>
            </tbody>
          </table>
          <div className="absolute top-0 right-0 opacity-5 text-[8rem] font-bold text-yellow-300 pointer-events-none select-none pr-4 pt-2">
            🚗
          </div>
        </motion.div>

        {/* RIGHT SIDE: Actions */}
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
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Proceed and Book via Site
                </button>

                <a
                  href={`https://wa.me/+61451107931?text=Hi, I want to book a car from ${pickLocation} ${pickAddress} to ${dropLocation} ${dropAddress} on ${pickupDate} at ${pickupTime}. Car Model: ${carName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-400 text-white text-lg font-semibold py-3 rounded-xl text-center transition-all duration-300 shadow-lg"
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
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border-2 border-yellow-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-gray-800 font-semibold shadow-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border-2 border-yellow-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-gray-800 font-semibold shadow-md"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full border-2 border-yellow-500 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all text-gray-800 font-semibold shadow-md"
                />

                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Confirm Booking
                </button>

                <a
                  href={`https://wa.me/61412345678?text=Hi, I want to book a car from ${pickLocation} to ${dropLocation} on ${pickupDate} at ${pickupTime}. Car Model: ${carName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-400 text-white text-lg font-semibold py-3 rounded-xl text-center transition-all duration-300 shadow-lg"
                >
                  Book via WhatsApp
                </a>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
