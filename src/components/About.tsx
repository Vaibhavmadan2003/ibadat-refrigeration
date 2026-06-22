'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-cyan-700">Ibadat Refrigeration</span>
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for all air conditioning and refrigeration needs
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Quality Service You Can Trust</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of dedicated service in Malkapur, Ibadat Refrigeration has become the go-to solution for AC repair, refrigeration maintenance, and appliance servicing. We operate 24/7 to ensure your comfort is never compromised.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyan-700 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">💡 Our Mission</h4>
                <p className="text-cyan-100 leading-relaxed">
                  To provide fast, reliable, and affordable air conditioning and refrigeration services that keep our community comfortable year-round with professional expertise.
                </p>
              </div>

              <div className="bg-blue-800 text-white rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">🎯 Our Vision</h4>
                <p className="text-blue-100 leading-relaxed">
                  To be the most trusted AC and refrigeration service provider in Malkapur and surrounding areas, known for quality, reliability, and exceptional customer care.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Ibadat Refrigeration?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">24/7 Service</h4>
                    <p className="text-cyan-100">Round-the-clock availability for emergency repairs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Expert Technicians</h4>
                    <p className="text-cyan-100">Experienced and certified professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">Affordable Rates</h4>
                    <p className="text-cyan-100">Competitive pricing with no hidden charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2">5-Star Rated</h4>
                    <p className="text-cyan-100">Trusted by 500+ satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
