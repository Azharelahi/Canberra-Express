"use client";

import React, { useState, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar } from "react-icons/fa";
// import PlacesAutocompleteInput from "@/components/PlacesAutocompleteInput";
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
      const today = new Date(currentDate.toDateString());
      const maxDate = new Date();
      maxDate.setDate(currentDate.getDate() + 15);

      if (selectedDate <= today) {
        setDateError("Same-day and past bookings are not allowed!");
      } else if (selectedDate > maxDate) {
        setDateError("Bookings can only be made up to 15 days in advance!");
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

    const { pickAddress, dropAddress, pickupDate, pickupTime, carName } =
      formData;

    if (
      !pickAddress ||
      !dropAddress ||
      !pickupDate ||
      !pickupTime ||
      !carName
    ) {
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

  const carNames = ["Comfort Car (Sedan 5 seater)", "SUV (7 Seater)"];

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📍 Book Your Ride
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pickup Address - Commented out Google Autocomplete */}
        {/* <PlacesAutocompleteInput
          placeholder="Enter pickup address"
          value={formData.pickAddress}
          onChange={(val) => setFormData({ ...formData, pickAddress: val })}
          icon={<FaMapMarkerAlt />}
          highlight="yellow"
        /> */}

        {/* Regular Input for Pickup Address */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 text-xl">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            name="pickAddress"
            value={formData.pickAddress}
            onChange={handleInputChange}
            placeholder="Enter pickup address"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Drop Address - Commented out Google Autocomplete */}
        {/* <PlacesAutocompleteInput
          placeholder="Enter drop-off address"
          value={formData.dropAddress}
          onChange={(val) => setFormData({ ...formData, dropAddress: val })}
          icon={<FaMapMarkerAlt />}
          highlight="blue"
        /> */}

        {/* Regular Input for Drop Address */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 text-xl">
            <FaMapMarkerAlt />
          </div>
          <input
            type="text"
            name="dropAddress"
            value={formData.dropAddress}
            onChange={handleInputChange}
            placeholder="Enter drop-off address"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-all text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pickup Date */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 text-xl pointer-events-none">
              <FaCalendarAlt />
            </div>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              min={today}
              max={maxDate}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none transition-all text-gray-800"
              required
            />
          </div>

          {/* Pickup Time */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 text-xl pointer-events-none z-10">
              <FaClock />
            </div>
            <select
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-all text-gray-800 appearance-none bg-white"
              required
            >
              <option value="" disabled>
                Select Time
              </option>
              {timeOptions.map((time, i) => (
                <option key={i} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {dateError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm font-medium"
          >
            {dateError}
          </motion.p>
        )}

        {/* Car Type */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 text-xl pointer-events-none z-10">
            <FaCar />
          </div>
          <select
            name="carName"
            value={formData.carName}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-red-500 focus:outline-none transition-all text-gray-800 appearance-none bg-white"
            required
          >
            <option value="" disabled>
              Car Type
            </option>
            {carNames.map((car, i) => (
              <option key={i} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting || !!dateError}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            isSubmitting || dateError
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white shadow-lg"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-3 border-white border-t-transparent rounded-full"
              />
              Processing...
            </span>
          ) : (
            "Confirm Booking"
          )}
        </motion.button>
      </form>
    </motion.div>
  );
});

BookingForm.displayName = "BookingForm";

export default BookingForm;