import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

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
    url: "https://www.canberraexpress.com.au",
    type: "website",
    images: [
      {
        url: "https://www.canberraexpress.com.au/assets/og-image.png",
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
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
