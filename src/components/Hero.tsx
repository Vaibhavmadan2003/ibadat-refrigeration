'use client';

const Hero = () => {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-br from-cyan-600 via-cyan-500 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-cyan-500/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-cyan-300/30">
              <span className="text-sm font-semibold">❄️ PROFESSIONAL AC & REFRIGERATION SERVICE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-cyan-200">Ibadat Refrigeration</span><br />Sale & Service
            </h1>
            <p className="text-xl text-cyan-50 mb-8 leading-relaxed">
              Ibadat Refrigeration provides comprehensive air conditioning repair, refrigeration sales, and maintenance services. Open 24 hours for your emergency needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919529825994"
                className="inline-flex items-center justify-center bg-white text-cyan-700 px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                📞 Call Now - 24/7
              </a>
              <a
                href="https://wa.me/919529825994"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                💬 Quick Message
              </a>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-cyan-200 mb-2">24/7</div>
              <p className="text-cyan-100 font-semibold">Always Open</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-cyan-200 mb-2">500+</div>
              <p className="text-cyan-100 font-semibold">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-cyan-200 mb-2">5.0★</div>
              <p className="text-cyan-100 font-semibold">Rated Reviews</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="text-4xl font-black text-cyan-200 mb-2">10+</div>
              <p className="text-cyan-100 font-semibold">Years Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
