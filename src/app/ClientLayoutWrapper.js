"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginButton from "@/components/LoginButton";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();

  // Check if path starts with /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <div className="flex min-h-screen flex-col justify-between">
      {!isAdminRoute && <Navbar />}
        {/* Add Login Button here */}
      {/* {!isAdminRoute && <LoginButton />} */}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}
