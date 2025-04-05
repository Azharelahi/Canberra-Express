"use client";
import { useSearchParams } from "next/navigation";

export default function BookingPage() {
  const searchParams = useSearchParams();

  const pickLocation = searchParams.get("pickLocation");
  const dropLocation = searchParams.get("dropLocation");
  const pickupDate = searchParams.get("pickupDate");
  const pickupTime = searchParams.get("pickupTime");
  const carName = searchParams.get("carName");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">Booking Confirmation</h2>
      <ul className="text-lg text-gray-800 space-y-2">
        <li><strong>Pickup City:</strong> {pickLocation}</li>
        <li><strong>Drop City:</strong> {dropLocation}</li>
        <li><strong>Pickup Date:</strong> {pickupDate}</li>
        <li><strong>Pickup Time:</strong> {pickupTime}</li>
        <li><strong>Car Model:</strong> {carName}</li>
      </ul>
    </div>
  );
}
