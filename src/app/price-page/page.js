"use client";

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 to-yellow-50 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-yellow-600 mb-8 text-center font-poppins">
          Price Comparison
        </h2>

        {/* Competitor Prices Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center font-poppins">
            Competitor Prices
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Road Jet */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">Canberra Express</h4>
                <p className="text-gray-600">Approximately 3 hours</p>
                <p className="text-gray-600">CBR-SYD</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$399 (AUD)</p>
            </div>

            {/* Fly */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">Fly</h4>
                <p className="text-gray-600">Approximately 3 hours</p>
                <p className="text-gray-600">SYD-CBR</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$375 (AUD) - $1000 (AUD)</p>
            </div>

            {/* Ride Share */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">Ride Share Companies</h4>
                <p className="text-gray-600">Approximately 3 hours</p>
                <p className="text-gray-600">SYD-CBR</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$550 (AUD) – $700 (AUD)</p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center font-poppins">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Standard Service */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">Standard Service</h4>
                <p className="text-gray-600">One-Way</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$399 (AUD)</p>
            </div>

            {/* Premium Service */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">Premium Service</h4>
                <p className="text-gray-600">One-Way</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$750 (AUD)</p>
            </div>

            {/* XL SUV Service */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">XL SUV Service</h4>
                <p className="text-gray-600">One-Way</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$750 (AUD)</p>
            </div>

            {/* XL Van Service */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">XL Van Service</h4>
                <p className="text-gray-600">One-Way</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$850 (AUD)</p>
            </div>

            {/* XL Mini Bus Service */}
            <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center transition-all transform hover:scale-105 duration-300">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-gray-700">XL Mini Bus Service</h4>
                <p className="text-gray-600">One-Way</p>
              </div>
              <p className="text-3xl font-bold text-yellow-500 mt-4">$900 (AUD)</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center font-poppins">
            Why Choose Us?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            We offer the most competitive prices for high-quality services, ensuring you have a comfortable and
            reliable journey. Our fleet includes a variety of vehicles to suit your needs, from standard services to
            premium options. Book with us for a seamless and luxurious experience.
          </p>
        </div>
      </div>
    </div>
  );
}
