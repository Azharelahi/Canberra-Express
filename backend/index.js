const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AdminModel = require("./models/admin"); // Import the Admin model
const cookieParser = require("cookie-parser"); // Middleware to parse cookies
const nodemailer = require("nodemailer");
const PDFDocument = require("pdfkit");
const { Readable } = require("stream");
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = "Mine Secret Key"; // Change this to something more secure in production
const allowedOrigins = [
  "https://canberra-express.vercel.app",
  "http://localhost:4000",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Add this if you're using cookies
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


app.use(express.json());
app.use(cookieParser()); // Use the cookie parser middleware

app.get("/", (req, res) => {
  res.send("hello backend");
});

// Admin Login Route
app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the admin by email
    const admin = await AdminModel.findOne({ email });

    // If no admin is found, send an error
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    // If password is incorrect, send an error
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a JWT token with the admin's email (or any other identifying info)
    const token = jwt.sign({ email: admin.email }, JWT_SECRET, {
      expiresIn: "15d", // Token expiration time (15 days)
    });

    // Set the token as an HTTP-only cookie with a 15-day expiration
    res.cookie("token", token, {
      httpOnly: true, // HTTP-only flag ensures the cookie is not accessible via JS
      secure: process.env.NODE_ENV === "production", // Only set secure flag in production (https)
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
      sameSite: "Strict", // Prevents the browser from sending the cookie on cross-site requests
    });

    // Respond with success message
    return res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// Admin Authentication Middleware
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Attach user to the request object
    req.user = user;
    next(); // Pass to the next middleware or route handler
  });
};

// Example protected route for authenticated admins
app.get("/admin/dashboard", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the admin dashboard", user: req.user });
});

app.post("/send-booking-email", async function (req, res) {
  const {
    clientName,
    clientPhone,
    clientEmail,
    pickLocation,
    pickAddress,
    dropLocation,
    dropAddress,
    pickupDate,
    pickupTime,
    carName,
  } = req.body;

  // Validate the required fields
  if (
    !clientName ||
    !clientPhone ||
    !clientEmail ||
    !pickLocation ||
    !dropLocation ||
    !pickupDate ||
    !pickupTime ||
    !carName
  ) {
    return res
      .status(400)
      .json({ message: "Missing required booking details." });
  }

  // Create a PDF Invoice in memory
  const generateInvoiceBuffer = () => {
    return new Promise((resolve, reject) => {
      const doc = new PDFDocument();
      const buffers = [];

      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => {
        const pdfBuffer = Buffer.concat(buffers);
        resolve(pdfBuffer);
      });

      doc.fontSize(20).text("Booking Invoice", { align: "center" }).moveDown();
      doc.fontSize(12).text(`Client Name: ${clientName}`);
      doc.text(`Client Phone: ${clientPhone}`);
      doc.text(`Client Email: ${clientEmail}`);
      doc.text(`Pickup Location: ${pickLocation} - ${pickAddress}`);
      doc.text(`Drop Location: ${dropLocation} - ${dropAddress}`);
      doc.text(`Pickup Date & Time: ${pickupDate} at ${pickupTime}`);
      doc.text(`Car Selected: ${carName}`);
      doc.text("Thank you for choosing Canberra Express!", {
        align: "center",
        lineGap: 10,
      });

      doc.end();
    });
  };

  const invoiceBuffer = await generateInvoiceBuffer();

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "canberraxpress@gmail.com", // Your Gmail account
      pass: "hdmu nvlf wabi cfip", // App password generated from Google Account
    },
  });

  // Client Email
  const clientMailOptions = {
    from: "Canberra Express <canberraxpress@gmail.com>", // Your email address
    to: clientEmail,
    subject: "Your Booking Confirmation - Canberra Express",
    html: `
      <h2>Thank You for Your Booking!</h2>
      <p>Here are your booking details:</p>
      <ul>
        <li><strong>Client Name:</strong> ${clientName}</li>
        <li><strong>Client Phone:</strong> ${clientPhone}</li>
        <li><strong>Pickup:</strong> ${pickLocation} - ${pickAddress}</li>
        <li><strong>Drop-off:</strong> ${dropLocation} - ${dropAddress}</li>
        <li><strong>Date & Time:</strong> ${pickupDate} at ${pickupTime}</li>
        <li><strong>Car:</strong> ${carName}</li>
      </ul>
      <p>Your invoice is attached as a PDF.</p>
    `,
    attachments: [
      {
        filename: "Canberra-Express-Invoice.pdf",
        content: invoiceBuffer,
        contentType: "application/pdf",
      },
    ],
  };

  // Admin Email
  const adminMailOptions = {
    from: "Canberra Express <canberraxpress@gmail.com>",
    to: "ehsan_elahi1992@hotmail.com",
    cc: ["mrtoheed2112@gmail.com", "azharelahi321@gmail.com"],

    subject: "New Booking Alert - PDF Invoice Attached",
    html: `
      <h2>New Booking Details</h2>
      <ul>
        <li><strong>Client Name:</strong> ${clientName}</li>
        <li><strong>Client Email:</strong> ${clientEmail}</li>
        <li><strong>Client Phone:</strong> ${clientPhone}</li>
        <li><strong>Pickup:</strong> ${pickLocation} - ${pickAddress}</li>
        <li><strong>Drop:</strong> ${dropLocation} - ${dropAddress}</li>
        <li><strong>Date & Time:</strong> ${pickupDate} at ${pickupTime}</li>
        <li><strong>Car:</strong> ${carName}</li>
      </ul>
      <p>Invoice attached as PDF.</p>
    `,
    attachments: [
      {
        filename: "Client-Booking-Invoice.pdf",
        content: invoiceBuffer,
        contentType: "application/pdf",
      },
    ],
  };

  try {
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: "Emails with invoice sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Email sending failed", error });
  }
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
