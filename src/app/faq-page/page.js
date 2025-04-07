"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if clicked on the already open FAQ
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a variety of services, including car rentals, premium transportation services, and customized packages tailored to your needs.",
    },
    {
      question: "How can I make a booking?",
      answer:
        "You can make a booking easily through our website or contact us directly via phone or WhatsApp.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and direct bank transfers.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking according to the terms and conditions specified during the booking process. Please refer to our cancellation policy for more details.",
    },
    {
      question: "Is there a mileage limit on rentals?",
      answer:
        "We offer both limited and unlimited mileage options depending on the service you choose. Please check the specific service terms for more details.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-50 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-yellow-600 mb-8 text-center font-poppins">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white shadow-lg rounded-3xl p-6 mb-4 cursor-pointer transition-all transform hover:scale-105 duration-300">
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-lg text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
