import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Importing `Head` to inject custom scripts
import Script from "next/script";
import FloatingButtons from "./components/FloatingButtons";

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
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "OZLYFT – Real-Time Car Rentals in Canberra",
    description:
      "Experience hassle-free car rentals in Canberra with OZLYFT. Book rides instantly like Uber or InDrive.",
    url: "https://www.ozlyft.com.au",
    siteName: "OZLYFT",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "https://ozlyft.com.au/prev-img.png",
        width: 1200,
        height: 630,
        alt: "OZLYFT Logo",
      },
    ],
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
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Google Maps Script */}
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            strategy="beforeInteractive"
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <ClientLayoutWrapper>
            {children}
            <FloatingButtons />
          </ClientLayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
