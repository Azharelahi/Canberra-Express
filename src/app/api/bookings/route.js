import { NextResponse } from "next/server";
import { sendBookingEmails } from "@/features/booking/server/booking-email";

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
    if (error?.message === "Email service is not configured.") {
      return NextResponse.json(
        {
          message:
            "Booking email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASSWORD in .env.local, then restart the Next.js server.",
        },
        { status: 503 }
      );
    }
    return NextResponse.json({ message: "Failed to send booking emails." }, { status: 500 });
  }
}
