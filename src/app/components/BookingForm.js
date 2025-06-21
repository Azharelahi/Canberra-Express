"use client";
import React, { useState, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar } from "react-icons/fa";
import PlacesAutocompleteInput from "@/components/PlacesAutocompleteInput";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const BookingForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    pickAddress: "",
    dropAddress: "",
    pickupDate: "",
    pickupTime: "",
    carName: "",
  });
  const [dateError, setDateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "pickupDate") {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      if (selectedDate < currentDate) {
        setDateError("You cannot select a past date!");
      } else {
        setDateError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dateError) {
      toast.error(dateError);
      return;
    }

    const { pickAddress, dropAddress, pickupDate, pickupTime, carName } = formData;
    if (!pickAddress || !dropAddress || !pickupDate || !pickupTime || !carName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    toast.success("Booking confirmed! Redirecting...");
    const queryString = new URLSearchParams(formData).toString();
    setTimeout(() => {
      router.push(`/booking-page?${queryString}`);
    }, 1500);
  };

  const carNames = ["5 Seater", "7 Seater", "9 Seater"];
  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      ["00", "30"].forEach((minute) => {
        const h = hour < 10 ? `0${hour}` : hour;
        times.push(`${h}:${minute}`);
      });
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center px-4 py-8"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[95vh] overflow-y-auto"
      >
        <h2 className="col-span-1 md:col-span-2 text-3xl font-bold text-yellow-600 text-center mb-4">
          Book Your Ride
        </h2>

        <PlacesAutocompleteInput
          label="Pickup Address"
          value={formData.pickAddress}
          onChange={(val) => setFormData({ ...formData, pickAddress: val })}
          icon={<FaMapMarkerAlt className="text-yellow-500" />}
          highlight="yellow"
        />

        <PlacesAutocompleteInput
          label="Drop Address"
          value={formData.dropAddress}
          onChange={(val) => setFormData({ ...formData, dropAddress: val })}
          icon={<FaMapMarkerAlt className="text-blue-500" />}
          highlight="blue"
        />

        <div className="relative">
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            min={today}
            max={maxDate}
            required
            className="peer w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl shadow-inner focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-yellow-50/70 placeholder-transparent"
            placeholder="Pickup Date"
          />
          {/* <label htmlFor="pickupDate" className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700">
            Pickup Date
          </label> */}
          <FaCalendarAlt className="absolute left-3 top-3 text-yellow-500" />
          {dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
        </div>

        <div className="relative">
          <select
            id="pickupTime"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
            required
            className="peer w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl shadow-inner focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-yellow-50/70"
          >
            <option value="" disabled hidden>Select Time</option>
            {timeOptions.map((time, i) => (
              <option key={i} value={time}>{time}</option>
            ))}
          </select>
          {/* <label htmlFor="pickupTime" className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700">
            Pickup Time
          </label> */}
          <FaClock className="absolute left-3 top-3 text-yellow-500" />
        </div>

        <div className="md:col-span-2 relative">
          <select
            id="carName"
            name="carName"
            value={formData.carName}
            onChange={handleInputChange}
            required
            className="peer w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl shadow-inner focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-yellow-50/70"
          >
            <option value="" disabled hidden>Select a car</option>
            {carNames.map((car, i) => (
              <option key={i} value={car}>{car}</option>
            ))}
          </select>
          {/* <label htmlFor="carName" className="absolute left-10 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-700">
            Car Type
          </label> */}
          <FaCar className="absolute left-3 top-3 text-yellow-500" />
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center">
          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 ${
              isSubmitting ? "bg-yellow-300 cursor-not-allowed" : "bg-gradient-to-r from-yellow-400 to-yellow-500"
            } text-white font-semibold rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg shadow-yellow-300/40 transition duration-300 ease-in-out flex items-center justify-center`}
          >
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            ) : (
              "Confirm Booking"
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
});

BookingForm.displayName = "BookingForm";
export default BookingForm;