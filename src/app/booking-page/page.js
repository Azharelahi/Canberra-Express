import BookingClient from "./BookingClient";
import { Suspense } from "react";

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center">Loading booking details...</div>
      }
    >
      <BookingClient />
    </Suspense>
  );
}
