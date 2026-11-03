
import nodemailer from "nodemailer";

const requiredFields = [
  "clientName",
  "clientPhone",
  "clientEmail",
  "pickAddress",
  "dropAddress",
  "pickupDate",
  "pickupTime",
  "carName",
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function createTransporter() {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASSWORD,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("Email service is not configured.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

const BRAND = {
  navy: "#101B2D",
  gold: "#D6AD60",
  background: "#F3F5F8",
  text: "#263449",
  muted: "#778397",
};

function bookingDetails(booking) {
  const rows = [
    ["Vehicle", booking.carName],
    ["Pickup location", booking.pickAddress],
    ["Drop-off location", booking.dropAddress],
    ["Pickup date", booking.pickupDate],
    ["Pickup time", booking.pickupTime],
  ];

  return rows.map(([label, value]) => `
    <tr>
      <td style="padding:13px 0;border-bottom:1px solid #E9EDF2;
        color:${BRAND.muted};font-size:13px;width:38%;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:13px 0;border-bottom:1px solid #E9EDF2;
        color:${BRAND.text};font-size:14px;font-weight:600;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `).join("");
}

function emailLayout({ heading, subtitle, content, footer }) {
  return `
  <!DOCTYPE html>
  <html>
  <body style="margin:0;padding:0;background:${BRAND.background};
    font-family:Arial,Helvetica,sans-serif;color:${BRAND.text};">

    <table width="100%" cellpadding="0" cellspacing="0" border="0"
      style="background:${BRAND.background};padding:35px 12px;">
      <tr>
        <td align="center">

          <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="max-width:600px;background:#FFFFFF;border-radius:12px;
            overflow:hidden;">

            <!-- Brand Header -->
            <tr>
              <td style="background:${BRAND.navy};padding:30px 35px;
                text-align:center;">

                <div style="font-size:30px;font-weight:800;
                  letter-spacing:4px;color:#FFFFFF;">
                  OZLYFT
                </div>

                <div style="height:3px;width:45px;background:${BRAND.gold};
                  margin:15px auto;"></div>

                <div style="font-size:11px;letter-spacing:2px;
                  color:#C4CBD5;text-transform:uppercase;">
                  PREMIUM TRAVEL EXPERIENCE
                </div>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="padding:35px 35px 20px;">

                <h1 style="font-size:24px;line-height:1.3;
                  color:${BRAND.navy};margin:0 0 12px;">
                  ${heading}
                </h1>

                <p style="font-size:14px;line-height:1.8;
                  color:${BRAND.muted};margin:0 0 25px;">
                  ${subtitle}
                </p>

                ${content}

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:22px 35px;background:#F8F9FB;
                border-top:1px solid #E9EDF2;text-align:center;">

                <p style="font-size:13px;color:${BRAND.text};
                  margin:0 0 8px;font-weight:600;">
                  ${footer}
                </p>

                <p style="font-size:11px;line-height:1.7;
                  color:${BRAND.muted};margin:0;">
                  OZLYFT · Premium Car Rental & Travel
                  <br>
                  This is an automated email. Please do not reply directly.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}

export async function sendBookingEmails(booking) {
  const missing = requiredFields.filter(
    (field) =>
      typeof booking?.[field] !== "string" ||
      !booking[field].trim()
  );

  if (missing.length) {
    return { error: "Missing required booking details." };
  }

  const transporter = createTransporter();

  const fromAddress =
    process.env.BOOKING_EMAIL_FROM || process.env.SMTP_USER;

  const adminEmail =
    process.env.BOOKING_ADMIN_EMAIL || "azharelahi321@gmail.com";

  const from = `"OZLYFT" <${fromAddress}>`;

  const details = `
    <div style="border:1px solid #E9EDF2;border-radius:9px;
      padding:18px 20px;margin:20px 0;">

      <h3 style="font-size:15px;color:${BRAND.navy};
        margin:0 0 12px;">
        YOUR BOOKING DETAILS
      </h3>

      <table width="100%" cellpadding="0" cellspacing="0"
        border="0">
        ${bookingDetails(booking)}
      </table>
    </div>
  `;

  // Customer email
  const customerHtml = emailLayout({
    heading: `Thank you, ${escapeHtml(booking.clientName)}!`,
    subtitle:
      "We've received your booking request. Our team will contact you shortly to confirm your ride.",

    content: `
      <div style="background:#F8F5ED;border-left:4px solid ${BRAND.gold};
        padding:16px 18px;margin-bottom:22px;border-radius:4px;">

        <p style="margin:0;color:${BRAND.navy};font-size:14px;
          font-weight:700;">
          Your journey starts with OZLYFT.
        </p>

        <p style="margin:7px 0 0;color:${BRAND.muted};
          font-size:13px;line-height:1.6;">
          Your booking request has been successfully received.
        </p>
      </div>

      ${details}

      <p style="font-size:14px;line-height:1.8;color:${BRAND.text};">
        If you have any questions about your booking, our team
        will be happy to assist you.
      </p>

      <p style="font-size:14px;color:${BRAND.navy};
        font-weight:600;margin-top:25px;">
        Thank you for choosing OZLYFT.
      </p>
    `,

    footer: "We look forward to driving you.",
  });

  // Administrator email
  const adminHtml = emailLayout({
    heading: "New Booking Received",
    subtitle:
      "A customer has submitted a new vehicle booking request through your website.",

    content: `
      <div style="background:#F8F5ED;border-left:4px solid ${BRAND.gold};
        padding:15px 18px;margin-bottom:22px;border-radius:4px;">

        <p style="font-size:13px;color:${BRAND.navy};
          font-weight:700;margin:0;">
          NEW BOOKING REQUEST
        </p>

        <p style="font-size:12px;color:${BRAND.muted};
          margin:6px 0 0;">
          Please review the details and contact the customer.
        </p>
      </div>

      ${details}

      <div style="border:1px solid #E9EDF2;border-radius:9px;
        padding:18px 20px;margin-top:20px;">

        <h3 style="font-size:15px;color:${BRAND.navy};
          margin:0 0 15px;">
          CUSTOMER INFORMATION
        </h3>

        <p style="font-size:13px;color:${BRAND.muted};margin:8px 0;">
          Customer name:
          <strong style="color:${BRAND.text};">
            ${escapeHtml(booking.clientName)}
          </strong>
        </p>

        <p style="font-size:13px;color:${BRAND.muted};margin:8px 0;">
          Email:
          <strong style="color:${BRAND.text};">
            ${escapeHtml(booking.clientEmail)}
          </strong>
        </p>

        <p style="font-size:13px;color:${BRAND.muted};margin:8px 0;">
          Phone:
          <strong style="color:${BRAND.text};">
            ${escapeHtml(booking.clientPhone)}
          </strong>
        </p>
      </div>

      <p style="font-size:13px;line-height:1.7;color:${BRAND.text};
        margin-top:25px;">
        <strong>Action required:</strong>
        Contact the customer to confirm availability and finalize
        the reservation.
      </p>
    `,

    footer: "OZLYFT Booking Administration",
  });

  const results = await Promise.allSettled([
    transporter.sendMail({
      from,
      to: booking.clientEmail,
      subject: `OZLYFT | Booking Request Received - ${booking.pickupDate}`,
      html: customerHtml,
    }),

    transporter.sendMail({
      from,
      to: adminEmail,
      cc: process.env.BOOKING_ADMIN_CC || undefined,
      subject: `OZLYFT | New Booking - ${booking.clientName}`,
      html: adminHtml,
    }),
  ]);

  return {
    customerEmail: {
      success: results[0].status === "fulfilled",
      messageId:
        results[0].status === "fulfilled"
          ? results[0].value.messageId
          : undefined,
      error:
        results[0].status === "rejected"
          ? results[0].reason?.message
          : undefined,
    },

    adminEmail: {
      success: results[1].status === "fulfilled",
      messageId:
        results[1].status === "fulfilled"
          ? results[1].value.messageId
          : undefined,
      error:
        results[1].status === "rejected"
          ? results[1].reason?.message
          : undefined,
    },
  };
}
