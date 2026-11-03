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

const BRAND = {
  ink: "#171817",
  gold: "#F2C21A",
  paper: "#F6F5F0",
  text: "#272923",
  muted: "#696B64",
  border: "#E9E7DE",
  softGold: "#FFF7D8",
};

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

function detailRow(label, value) {
  return `
    <tr>
      <td width="34%" valign="top" style="padding:12px 10px 12px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.muted};font-size:12px;line-height:1.5;">
        ${escapeHtml(label)}
      </td>
      <td valign="top" style="padding:12px 0;border-bottom:1px solid ${BRAND.border};color:${BRAND.text};font-size:13px;font-weight:700;line-height:1.55;word-break:break-word;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function tripCard(booking) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin:22px 0 0;border:1px solid ${BRAND.border};border-radius:14px;background:#FFFFFF;">
      <tr>
        <td style="padding:18px 20px 4px;">
          <p style="margin:0;color:${BRAND.muted};font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Your trip</p>
          <p style="margin:7px 0 0;color:${BRAND.ink};font-size:17px;font-weight:700;line-height:1.35;">${escapeHtml(booking.pickAddress)} <span style="color:#9A7A12;">&#8594;</span> ${escapeHtml(booking.dropAddress)}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:10px 20px 18px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${detailRow("Pickup date", booking.pickupDate)}
            ${detailRow("Pickup time", booking.pickupTime)}
            ${detailRow("Vehicle", booking.carName)}
          </table>
        </td>
      </tr>
    </table>
  `;
}

function customerDetailsCard(booking) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:18px;border:1px solid ${BRAND.border};border-radius:14px;background:#FFFFFF;">
      <tr><td style="padding:18px 20px 4px;color:${BRAND.ink};font-size:14px;font-weight:700;">Customer details</td></tr>
      <tr><td style="padding:4px 20px 18px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${detailRow("Name", booking.clientName)}
        ${detailRow("Email", booking.clientEmail)}
        ${detailRow("Phone", booking.clientPhone)}
      </table></td></tr>
    </table>
  `;
}

function emailLayout({ preheader, eyebrow, title, intro, content, footer }) {
  return `
    <!doctype html>
    <html lang="en">
      <head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><title>${escapeHtml(title)}</title></head>
      <body style="width:100%;margin:0;padding:0;background:${BRAND.paper};font-family:Arial,Helvetica,sans-serif;color:${BRAND.text};-webkit-text-size-adjust:100%;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:${BRAND.paper};">
          <tr><td align="center" style="padding:34px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:620px;border:1px solid ${BRAND.border};border-radius:18px;background:#FFFFFF;overflow:hidden;">
              <tr><td style="padding:22px 30px;background:${BRAND.ink};">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
                  <td valign="middle" width="38" height="38" align="center" style="width:38px;height:38px;border-radius:12px;background:${BRAND.gold};color:${BRAND.ink};font-family:Georgia,serif;font-size:23px;font-style:italic;font-weight:700;">O</td>
                  <td valign="middle" style="padding-left:11px;color:#FFFFFF;font-size:16px;font-weight:700;letter-spacing:3px;">OZLYFT</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:32px 30px 30px;">
                <p style="display:inline-block;margin:0 0 14px;padding:7px 10px;border-radius:999px;background:${BRAND.softGold};color:#665314;font-size:10px;font-weight:700;letter-spacing:1.1px;text-transform:uppercase;">${escapeHtml(eyebrow)}</p>
                <h1 style="margin:0;color:${BRAND.ink};font-size:27px;line-height:1.2;letter-spacing:-.5px;">${escapeHtml(title)}</h1>
                <p style="margin:13px 0 0;color:${BRAND.muted};font-size:14px;line-height:1.75;">${escapeHtml(intro)}</p>
                ${content}
              </td></tr>
              <tr><td style="padding:19px 30px 22px;border-top:1px solid ${BRAND.border};background:#FBFAF6;">
                <p style="margin:0;color:${BRAND.text};font-size:12px;font-weight:700;line-height:1.6;">${escapeHtml(footer)}</p>
                <p style="margin:7px 0 0;color:${BRAND.muted};font-size:11px;line-height:1.7;">OZLYFT &#183; Canberra rides and transfers<br>Need help? <a href="tel:+61451107931" style="color:${BRAND.ink};font-weight:700;text-decoration:underline;">+61 451 107 931</a> &nbsp;|&nbsp; <a href="mailto:ozlyft@gmail.com" style="color:${BRAND.ink};font-weight:700;text-decoration:underline;">ozlyft@gmail.com</a></p>
                <p style="margin:12px 0 0;color:#92938D;font-size:10px;line-height:1.6;">This is an automated email. Please do not reply directly.</p>
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
  `;
}

function bookingText(booking) {
  return [
    `Pickup: ${booking.pickAddress}`,
    `Drop-off: ${booking.dropAddress}`,
    `Date: ${booking.pickupDate}`,
    `Time: ${booking.pickupTime}`,
    `Vehicle: ${booking.carName}`,
  ].join("\n");
}

export async function sendBookingEmails(booking) {
  const missing = requiredFields.filter(
    (field) => typeof booking?.[field] !== "string" || !booking[field].trim()
  );

  if (missing.length) return { error: "Missing required booking details." };

  const transporter = createTransporter();
  const fromAddress = process.env.BOOKING_EMAIL_FROM || process.env.SMTP_USER;
  const adminEmail = process.env.BOOKING_ADMIN_EMAIL || "azharelahi321@gmail.com";
  const adminCc = [
    "ehsan_elahi1992@hotmail.com",
    "farhanelahi123@gmail.com",
    process.env.BOOKING_ADMIN_CC,
  ].filter(Boolean);
  const from = `"OZLYFT" <${fromAddress}>`;

  const customerHtml = emailLayout({
    preheader: `Booking request received for ${booking.pickupDate} at ${booking.pickupTime}.`,
    eyebrow: "Booking request received",
    title: `Thanks for choosing OZLYFT, ${booking.clientName}.`,
    intro: "We have received your ride request. Our team will contact you shortly to confirm availability and the final trip details.",
    content: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:22px;border-radius:12px;background:${BRAND.softGold};">
        <tr><td style="padding:15px 17px;border-left:4px solid ${BRAND.gold};">
          <p style="margin:0;color:${BRAND.ink};font-size:13px;font-weight:700;line-height:1.5;">What happens next?</p>
          <p style="margin:5px 0 0;color:${BRAND.muted};font-size:12px;line-height:1.65;">An OZLYFT team member will be in touch to confirm your request. This email is a receipt of your request, not a confirmed booking.</p>
        </td></tr>
      </table>
      ${tripCard(booking)}
    `,
    footer: "Thank you for riding with OZLYFT.",
  });

  const adminHtml = emailLayout({
    preheader: `New booking request from ${booking.clientName} for ${booking.pickupDate}.`,
    eyebrow: "Action required &#183; New request",
    title: "A new ride request is waiting.",
    intro: "A customer has submitted a booking request. Review the route and contact them to confirm availability.",
    content: `
      ${tripCard(booking)}
      ${customerDetailsCard(booking)}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:18px;border-radius:12px;background:${BRAND.softGold};">
        <tr><td style="padding:14px 17px;border-left:4px solid ${BRAND.gold};color:${BRAND.text};font-size:12px;line-height:1.65;">
          <strong style="color:${BRAND.ink};">Next step:</strong> Contact the customer to confirm vehicle availability and the requested trip.
        </td></tr>
      </table>
    `,
    footer: "OZLYFT booking administration",
  });

  const customerText = `Hello ${booking.clientName},\n\nWe received your booking request. Our team will contact you shortly to confirm availability. This email is a receipt of your request, not a confirmed booking.\n\n${bookingText(booking)}\n\nNeed help? +61 451 107 931 | ozlyft@gmail.com`;
  const adminText = `New booking request\n\n${bookingText(booking)}\n\nCustomer: ${booking.clientName}\nEmail: ${booking.clientEmail}\nPhone: ${booking.clientPhone}\n\nNext step: Contact the customer to confirm availability.`;

  const results = await Promise.allSettled([
    transporter.sendMail({
      from,
      to: booking.clientEmail,
      subject: `OZLYFT | Request received &#183; ${booking.pickupDate}`,
      text: customerText,
      html: customerHtml,
    }),
    transporter.sendMail({
      from,
      to: adminEmail,
      cc: adminCc,
      subject: `OZLYFT | New request &#183; ${booking.clientName} &#183; ${booking.pickupDate}`,
      text: adminText,
      html: adminHtml,
    }),
  ]);

  return {
    customerEmail: {
      success: results[0].status === "fulfilled",
      messageId: results[0].status === "fulfilled" ? results[0].value.messageId : undefined,
      error: results[0].status === "rejected" ? results[0].reason?.message : undefined,
    },
    adminEmail: {
      success: results[1].status === "fulfilled",
      messageId: results[1].status === "fulfilled" ? results[1].value.messageId : undefined,
      error: results[1].status === "rejected" ? results[1].reason?.message : undefined,
    },
  };
}
