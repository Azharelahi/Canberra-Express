"use client";
import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import CompanyDescription from "./components/CompanyDescription";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";

const page = () => {
    const bookingFormRef = useRef(null);
  return (
    <div>
       <HeroSection bookingFormRef={bookingFormRef} />
      <CompanyDescription />
       <BookingForm ref={bookingFormRef} />
      <WhyChoose />
    </div>
  );
};

export default page;
