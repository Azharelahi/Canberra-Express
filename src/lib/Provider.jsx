"use client";

import { SessionProvider } from "next-auth/react";
import ClientLayoutWrapper from "../app/ClientLayoutWrapper.js";

export default function Providers({ children }) {
  return (
   
      <SessionProvider>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </SessionProvider>
  );
}
