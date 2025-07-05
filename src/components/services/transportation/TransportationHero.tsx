const TransportationHero = () => {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-16 bg-[url('/images/ceo-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Specialized Transportation Services
        </h1>
        <p className="max-w-2xl text-lg text-gray-300">
          From roll-off container rentals to hazardous material transport and
          24/7 emergency response, we move safely, swiftly, and in full
          compliance.
        </p>
      </div>

      <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Safe, Certified, and Ready
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We provide reliable transportation solutions tailored for
              environmental and industrial operations. Our fleet is equipped for
              hazardous waste hauling, debris roll-offs, and critical emergency
              deployments — all handled by certified professionals.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>DOT & EPA-compliant hazmat transport</li>
              <li>Roll-off containers from 10 to 40 yards</li>
              <li>Rapid deployment for spills and urgent events</li>
              <li>Tracked logistics and insured delivery</li>
            </ul>
          </div>
          <img
            src="/images/transport-overview.jpg"
            alt="Hazmat truck"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Roll-off Container Rentals",
                description:
                  "Available in multiple sizes, perfect for demolition, cleanups, and site waste. Fast delivery and pickup.",
                icon: "🗑️",
              },
              {
                title: "Hazardous Material Transport",
                description:
                  "Certified for transporting asbestos, chemicals, and other regulated materials, fully documented and compliant.",
                icon: "☣️",
              },
              {
                title: "24/7 Emergency Response",
                description:
                  "Rapid dispatch for environmental emergencies, spills, or regulated substance incidents — day or night.",
                icon: "🚨",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-green-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Need Urgent Transportation Support?
          </h2>
          <p className="mb-6">
            Our team is on standby 24/7 to respond to your project or emergency
            needs.
          </p>
          <a
            href="#quote"
            className="inline-block bg-white text-green-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </section>
  );
};

export default TransportationHero;
