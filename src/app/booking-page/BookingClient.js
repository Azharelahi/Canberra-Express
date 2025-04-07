'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookingClient() {
  const searchParams = useSearchParams();

  const pickLocation = searchParams.get("pickLocation");
  const pickAddress = searchParams.get("pickAddress");
  const dropLocation = searchParams.get("dropLocation");
  const dropAddress = searchParams.get("dropAddress");
  const pickupDate = searchParams.get("pickupDate");
  const pickupTime = searchParams.get("pickupTime");
  const carName = searchParams.get("carName");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("bookingUserInfo");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingUserInfo", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Your JSX as before (Booking Summary + Form) */}
        {/* Copy your entire previous JSX here — no changes needed */}
      </div>
    </div>
  );
}
