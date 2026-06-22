'use client';

const Services = () => {
  const services = [
    {
      icon: '❄️',
      title: 'AC Repair & Service',
      description: 'Complete air conditioning repair, maintenance, and servicing for all brands'
    },
    {
      icon: '🧊',
      title: 'Refrigeration Service',
      description: 'Professional refrigerator and deep freezer repair and maintenance'
    },
    {
      icon: '🌊',
      title: 'Water Purifier Repair',
      description: 'RO water purifier installation, maintenance, and repair services'
    },
    {
      icon: '⚙️',
      title: 'Washing Machine Service',
      description: 'Expert repair and maintenance for all washing machine models'
    },
    {
      icon: '🔧',
      title: 'Electric Geyser Service',
      description: 'Installation, repair, and maintenance of electric water heaters'
    },
    {
      icon: '📞',
      title: 'Emergency Service',
      description: 'Quick response 24/7 emergency repairs available anytime'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-cyan-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your air conditioning, refrigeration, and appliance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-cyan-700 text-white rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Need Immediate Service?</h3>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Ibadat Refrigeration is available 24/7 for all your emergency AC and appliance repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919529825994"
              className="inline-block bg-white text-cyan-700 px-8 py-3 rounded-full font-bold hover:bg-cyan-50 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919529825994"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
