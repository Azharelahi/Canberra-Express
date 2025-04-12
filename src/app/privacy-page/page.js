"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6 animate-pulse">
          Privacy Policy for Canberra Express
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-700 mb-6"
        >
          At Canberra Express, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines the
          types of information we collect, how we use it, and how we protect it.
        </motion.p>

        <div className="space-y-6">
          {/* Section 1 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            1. Information We Collect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We collect personal information that you provide to us when you use
            our services, such as your name, email address, phone number, and
            payment details. Additionally, we may collect usage data, such as
            the pages you visit on our website.
          </motion.p>

          {/* Section 2 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            2. How We Use Your Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We use your information to provide, maintain, and improve our
            services. This includes processing your bookings, responding to your
            inquiries, and sending relevant notifications regarding your
            bookings or changes.
          </motion.p>

          {/* Section 3 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            3. How We Protect Your Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure. This includes using
            encryption and secure servers to protect your data.
          </motion.p>

          {/* Section 4 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            4. Sharing Your Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We do not sell or rent your personal information to third parties.
            However, we may share your information with trusted partners for the
            purposes of processing your bookings or improving our services.
          </motion.p>

          {/* Section 5 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            5. Your Rights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            You have the right to access, correct, or delete your personal
            information stored by us. If you wish to exercise any of these
            rights, please contact us at info@canberraexpress.com.
          </motion.p>

          {/* Section 6 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            6. Updates to This Privacy Policy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </motion.p>

          {/* Section 7 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            7. Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="text-lg text-gray-700 mb-6"
          >
            If you have any questions about this Privacy Policy or our
            practices, please contact us at info@canberraexpress.com.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3, duration: 0.5 }}
          className="text-center text-gray-700 mt-6"
        >
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600 transition duration-300"
          >
            Back to Top
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
