// src/pages/About.jsx

export default function About() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section (No Background) */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About E-Shop
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Delivering quality products, secure payments, and a seamless online
            shopping experience across the UK.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl shadow-sm p-10 md:p-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            E-Shop is a modern e-commerce platform built to provide customers
            with high-quality products at competitive prices. We are committed
            to making online shopping simple, reliable, and secure.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our curated collection includes electronics, fashion, home
            essentials, beauty products, and lifestyle items — all carefully
            selected to meet our quality standards and customer expectations.
          </p>
        </div>

        {/* Values Section */}
        <div className="mt-20 text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600">
            Everything we do is driven by trust, quality, and customer
            satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Quality First
            </h3>
            <p className="text-gray-600">
              Every product is carefully reviewed to ensure it meets our high
              standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Customer Focused
            </h3>
            <p className="text-gray-600">
              We prioritise excellent service and responsive customer support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Secure payments and dependable delivery ensure a smooth
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
