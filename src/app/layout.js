import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./../lib/Provider.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

import FloatingButtons from "./components/FloatingButtons";
import GoogleAnalytics from "./GoogleAnalytics";
import GoogleMapsProvider from "@/lib/GoogleMapsProvider";


// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadataBase = new URL("https://www.ozlyft.com.au");
export const metadata = {
  title: "OZLYFT – Real-Time Car Rentals in Canberra",
  description:
    "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "OZLYFT – Real-Time Car Rentals in Canberra",
    description:
      "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
    url: "https://www.ozlyft.com.au",
    siteName: "OZLYFT",
    type: "website",
    locale: "en_AU",
    images: [{ url: "https://ozlyft.com.au/prev-img.png", width: 1200, height: 630, alt: "OZLYFT Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OZLYFT – Real-Time Car Rentals in Canberra",
    description:
      "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
    images: ["https://ozlyft.com.au/prev-img.png"],
  },
};

export default function RootLayout({ children }) {
    return (
    <html lang="en">
      <head>
        {/* Google Ads & Analytics Scripts */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <GoogleMapsProvider/>
        <GoogleAnalytics />
        <Providers>
          {children}
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
