"use client";
import React, { useState, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar } from "react-icons/fa";

const BookingForm = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    pickLocation: "",
    dropLocation: "",
    pickAddress: "",
    dropAddress: "",
    pickupDate: "",
    pickupTime: "",
    carName: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    router.push(`/booking-page?${queryString}`);
  };

  const cities = ["Canberra", "Sydney"];
  const canberraPlaces = ["Belconnen", "Civic", "Woden", "Tuggeranong", "Gungahlin"];
  const sydneyPlaces = ["Bondi", "Manly", "Redfern", "Surry Hills", "Paddington"];
  const carNames = ["5 Seater","7 Seater","9 Seater"];

  const getPlaces = (city) => {
    if (city === "Canberra") return canberraPlaces;
    if (city === "Sydney") return sydneyPlaces;
    return [];
  };

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
    <div ref={ref} className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 mb-4">
            Book Your Ride with Ease
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Fill out the essentials below, and we'll handle the rest!
          </p>
        </div>

        <div className="bg-[#fdfdfd] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl w-full max-w-2xl xl:max-w-xl mx-auto overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Pickup Section */}
            <div className="bg-yellow-50 p-4 sm:p-6 rounded-xl border border-yellow-300">
              <h3 className="text-lg font-semibold text-yellow-700 mb-4">Pickup Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Pickup Location */}
                <div>
                  <label htmlFor="pickLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-yellow-500" />
                    <select
                      id="pickLocation"
                      name="pickLocation"
                      value={formData.pickLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="" disabled>Select Pickup City</option>
                      {cities.map((city, i) => (
                        <option key={i} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Pickup Address */}
                {formData.pickLocation && (
                  <div>
                    <label htmlFor="pickAddress" className="block text-sm font-semibold text-gray-700 mb-1">
                      Pickup Address
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-3 text-yellow-500" />
                      <select
                        id="pickAddress"
                        name="pickAddress"
                        value={formData.pickAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                      >
                        <option value="" disabled>Select Street/Area</option>
                        {getPlaces(formData.pickLocation).map((place, i) => (
                          <option key={i} value={place}>{place}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Pickup Date */}
                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3 text-yellow-500" />
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      min={today}
                      max={maxDate}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>

                {/* Pickup Time */}
                <div>
                  <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-700 mb-1">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <FaClock className="absolute left-3 top-3 text-yellow-500" />
                    <select
                      id="pickupTime"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    >
                      <option value="" disabled>Select Time</option>
                      {timeOptions.map((time, i) => (
                        <option key={i} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Drop Section */}
            <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border border-blue-300">
              <h3 className="text-lg font-semibold text-blue-700 mb-4">Drop Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Drop Location */}
                <div>
                  <label htmlFor="dropLocation" className="block text-sm font-semibold text-gray-700 mb-1">
                    Drop Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-3 text-blue-500" />
                    <select
                      id="dropLocation"
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="" disabled>Select Drop City</option>
                      {cities.map((city, i) => (
                        <option key={i} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Drop Address */}
                {formData.dropLocation && (
                  <div>
                    <label htmlFor="dropAddress" className="block text-sm font-semibold text-gray-700 mb-1">
                      Drop Address
                    </label>
                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-3 top-3 text-blue-500" />
                      <select
                        id="dropAddress"
                        name="dropAddress"
                        value={formData.dropAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      >
                        <option value="" disabled>Select Street/Area</option>
                        {getPlaces(formData.dropLocation).map((place, i) => (
                          <option key={i} value={place}>{place}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Car Model */}
            <div>
              <label htmlFor="carName" className="block text-sm font-semibold text-gray-700 mb-1">
                Car Type
              </label>
              <div className="relative">
                <FaCar className="absolute left-3 top-3 text-yellow-500" />
                <select
                  id="carName"
                  name="carName"
                  value={formData.carName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md text-base font-semibold text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                >
                  <option value="" disabled>Select a car</option>
                  {carNames.map((car, i) => (
                    <option key={i} value={car}>{car}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:shadow-xl transition hover:scale-105 duration-200"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

BookingForm.displayName = "BookingForm";
export default BookingForm;