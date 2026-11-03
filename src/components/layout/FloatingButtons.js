// components/FloatingButtons.tsx
"use client";

import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  // Prefilled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hello OzLyft team, I’d like to enquire about booking a ride. My travel details are:\n\n• Route: Canberra ⇄ Sydney\n• Date of Travel: [Enter Date]\n• Number of Passengers: [Enter Number]\n\nCould you please confirm availability and provide a quote?\n\nThank you."
  );

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/61433441275?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          <span className="glow"></span>
          <span className="ripple"></span>
          <FaWhatsapp size={26} className="relative z-10" />
        </a>

        {/* Call Button */}
        <a href="tel:+61433441275" className="btn-call">
          <span className="glow"></span>
          <span className="ripple"></span>
          <FaPhone size={26} className="relative z-10" />
        </a>
      </div>

      <style jsx>{`
        .btn-whatsapp,
        .btn-call {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          overflow: hidden;
          animation: float 3s ease-in-out infinite;
        }
        .btn-whatsapp {
          color: #25d366;
        }
        .btn-call {
          color: #1e90ff;
        }
        .btn-whatsapp:hover,
        .btn-call:hover {
          transform: scale(1.1);
        }

        /* Glow animation */
        .glow {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          filter: blur(12px);
          z-index: 0;
          opacity: 0.7;
          animation: glow 2.5s ease-in-out infinite;
        }
        .btn-whatsapp .glow {
          background: rgba(37, 211, 102, 0.4);
        }
        .btn-call .glow {
          background: rgba(30, 144, 255, 0.4);
        }

        /* Ripple effect */
        .ripple {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 2px solid currentColor;
          opacity: 0;
          transform: scale(1);
        }
        .btn-whatsapp:hover .ripple,
        .btn-call:hover .ripple {
          animation: ripple 1.5s linear infinite, spin 6s linear infinite;
          opacity: 0.6;
        }

        /* Keyframes */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
