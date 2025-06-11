import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import "@fortawesome/fontawesome-free/css/all.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OZLYFT – Real-Time Car Rentals in Canberra",
  description:
    "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
  openGraph: {
    title: "OZLYFT – Real-Time Car Rentals in Canberra",
    description:
      "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
    url: "https://www.ozlyft.com.au", // update to your actual domain
    type: "website",
    images: [
      {
        url: "https://ozlyft.vercel.app/logo2.png", // replace if hosted elsewhere
        width: 1200,
        height: 630,
        alt: "OZLYFT Logo",
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
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
