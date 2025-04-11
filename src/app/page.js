import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CompanyDescription from "./components/CompanyDescription";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CompanyDescription />
      <BookingForm />
      <WhyChoose />
    </div>
  );
};

export default page;
