import nodemailer from "nodemailer";

const requiredFields = [
  "clientName", "clientPhone", "clientEmail", "pickAddress", "dropAddress",
  "pickupDate", "pickupTime", "carName",
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("Email service is not configured.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

export async function sendBookingEmails(booking) {
  const missing = requiredFields.filter(
    (field) => typeof booking[field] !== "string" || !booking[field].trim()
  );
  if (missing.length) return { error: "Missing required booking details." };

  const safe = Object.fromEntries(requiredFields.map((field) => [field, escapeHtml(booking[field])]));
  const transporter = createTransporter();
  const from = process.env.BOOKING_EMAIL_FROM || process.env.SMTP_USER;
  const adminEmail = process.env.BOOKING_ADMIN_EMAIL;
  if (!adminEmail) throw new Error("BOOKING_ADMIN_EMAIL is not configured.");

  const details = `
    <li><strong>Name:</strong> ${safe.clientName}</li>
    <li><strong>Email:</strong> ${safe.clientEmail}</li>
    <li><strong>Car:</strong> ${safe.carName}</li>
    <li><strong>Pickup:</strong> ${safe.pickAddress}</li>
    <li><strong>Drop-off:</strong> ${safe.dropAddress}</li>
    <li><strong>Date and time:</strong> ${safe.pickupDate} at ${safe.pickupTime}</li>
    <li><strong>Phone:</strong> ${safe.clientPhone}</li>`;

  await Promise.all([
    transporter.sendMail({
      from, to: booking.clientEmail,
      subject: `Your OZLYFT booking confirmation — ${booking.pickupDate}`,
      html: `<div style="font-family:Arial,sans-serif"><h2>Hi ${safe.clientName},</h2><p>Thanks for booking with OZLYFT. We will contact you shortly to confirm your ride.</p><ul>${details}</ul><p>OZLYFT</p></div>`,
    }),
    transporter.sendMail({
      from, to: adminEmail,
      cc: process.env.BOOKING_ADMIN_CC || undefined,
      subject: `New booking — ${safe.clientName} (${safe.pickupDate})`,
      html: `<div style="font-family:Arial,sans-serif"><h2>New booking received</h2><ul>${details}</ul></div>`,
    }),
  ]);
}
