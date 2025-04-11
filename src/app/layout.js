import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Canberra Express – Car Rentals in Canberra",
  description:
    "Book premium car rentals in Canberra at affordable prices with Canberra Express.",
  openGraph: {
    title: "Canberra Express – Car Rentals in Canberra",
    description:
      "Book premium car rentals in Canberra at affordable prices with Canberra Express.",
    url: "https://www.canberraexpress.com.au", // Update to your site URL
    type: "website",
    images: [
      {
        url: "https://www.canberraexpress.com.au/assets/og-image.png", // Update with the correct image URL
        width: 1200,
        height: 630,
        alt: "Canberra Express Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <div className="flex min-h-screen flex-col justify-between">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
