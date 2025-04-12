"use client";

import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-6 animate-pulse">
          Terms of Service for Canberra Express
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-700 mb-6"
        >
          These Terms of Service govern your use of the Canberra Express website
          and services. By using our services, you agree to these terms.
        </motion.p>

        <div className="space-y-6">
          {/* Section 1 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            1. Acceptance of Terms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            By accessing and using the Canberra Express website, you agree to
            comply with these Terms of Service. If you do not agree with these
            terms, please refrain from using our services.
          </motion.p>

          {/* Section 2 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            2. User Responsibilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            You agree to use the Canberra Express website and services only for
            lawful purposes. You will not engage in any activity that violates
            the rights of others or disrupts the proper functioning of the
            website.
          </motion.p>

          {/* Section 3 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            3. Account Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            You are responsible for maintaining the confidentiality of your
            account information and ensuring that all activities conducted under
            your account comply with these Terms of Service.
          </motion.p>

          {/* Section 4 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            4. Intellectual Property
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            All content, trademarks, and materials on the Canberra Express
            website are owned by us or our licensors. You may not use, copy, or
            distribute any of our intellectual property without our express
            permission.
          </motion.p>

          {/* Section 5 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            5. Privacy Policy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            By using our services, you also agree to our Privacy Policy, which
            outlines how we collect, use, and protect your personal information.
          </motion.p>

          {/* Section 6 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            6. Termination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            We reserve the right to suspend or terminate your access to our
            services at any time for violations of these Terms of Service.
          </motion.p>

          {/* Section 7 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            7. Disclaimers and Limitation of Liability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.1, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            Canberra Express makes no warranties regarding the availability,
            reliability, or accuracy of our services. We are not liable for any
            damages resulting from your use of our website or services.
          </motion.p>

          {/* Section 8 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            8. Governing Law
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="text-lg text-gray-700"
          >
            These Terms of Service are governed by the laws of the applicable
            jurisdiction where Canberra Express operates.
          </motion.p>

          {/* Section 9 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7, duration: 0.5 }}
            className="text-2xl font-semibold text-gray-900"
          >
            9. Changes to Terms
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.9, duration: 0.5 }}
            className="text-lg text-gray-700 mb-6"
          >
            We may update these Terms of Service at any time. Any changes will
            be posted on this page with an updated effective date.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.1, duration: 0.5 }}
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

export default TermsOfService;
