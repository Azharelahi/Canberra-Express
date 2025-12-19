// app/Providers.jsx
"use client"; // <-- This makes it a Client Component

import { SessionProvider } from "next-auth/react";
import { ClerkProvider } from "@clerk/nextjs";
import ClientLayoutWrapper from "../app/ClientLayoutWrapper.js";

export default function Providers({ children }) {
  return (
    <ClerkProvider>
      <SessionProvider>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </SessionProvider>
    </ClerkProvider>
  );
}
