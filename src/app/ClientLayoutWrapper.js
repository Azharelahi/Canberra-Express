"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function ClientLayoutWrapper({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
