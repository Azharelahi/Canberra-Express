import { NextResponse } from "next/server";
import { sendBookingEmails } from "@/lib/server/booking-email";

export const runtime = "nodejs";

export async function POST(request) {
  let booking;
  try {
    booking = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  try {
    const result = await sendBookingEmails(booking ?? {});
    if (result?.error) return NextResponse.json({ message: result.error }, { status: 400 });
    return NextResponse.json({ message: "Booking emails sent successfully." });
  } catch (error) {
    console.error("Booking email delivery failed:", error);
    return NextResponse.json({ message: "Failed to send booking emails." }, { status: 500 });
  }
}
