"use client";
import React, { useRef } from "react";
import HeroSection from "@/features/home/components/HeroSection";
import CompanyDescription from "@/features/home/components/CompanyDescription";
import BookingForm from "@/features/booking/components/BookingForm";
import WhyChoose from "@/features/home/components/WhyChoose";

const page = () => {
    const bookingFormRef = useRef(null);
  return (
    <div>
       <HeroSection bookingFormRef={bookingFormRef} />
      <div id="book" ref={bookingFormRef} className="booking-anchor"><BookingForm /></div>
      <CompanyDescription />
      <WhyChoose />
    </div>
  );
};

export default page;
