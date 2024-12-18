import React, { useState, useEffect } from 'react'
import AOS from 'aos'; // Import AOS
// import the  modal
// ... existing code ...
import Modal from '../../components/modal'
// ... existing code ...

const Call = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return <div>
    <section id="call" className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative md:px-40 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 " data-aos="fade-up">
            Ready to Transform Your Digital Presence?
          </h2>
          
          <p className="header-paragraph text-white/90 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Join hundreds of satisfied clients who have elevated their brands with our expertise. 
            Let's create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            {/* Primary CTA */}
            <button onClick={handleOpenModal} className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <span className="relative">Start Your Project</span>
            </button>

            {/* Secondary CTA */}
            <a href="#services" className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white transition-all duration-300 hover:-translate-y-1">
              <span>Explore Services</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20" data-aos="fade-up" data-aos-delay="300">
            <p className="text-white/80 mb-6 text-lg">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
              {/* Replace these with actual client logos or trust indicators */}
              <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Client 1</span>
              </div>
              <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Client 2</span>
              </div>
              <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Client 3</span>
              </div>
              <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">Client 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
     <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
      )}
    </section>
  </div>;
};

export default Call;