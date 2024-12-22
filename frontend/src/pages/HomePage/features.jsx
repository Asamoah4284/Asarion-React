import React, { useState, useEffect } from 'react'
import Modal from '../../components/modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return <div>
      <section className="section features py-24 inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" id="features" aria-label="features">
        <div className="container md:px-40">
          {/* Enhanced Header Section */}
          <div className="text-center mb-24" data-aos="fade-up">
            <span className="inline-block px-6 py-3 bg-blue-100 text-blue-600 rounded-full text-lg font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="h2-sm text-gray-900 mb-8">
              Reasons to Choose Us
            </h2>

            <p className="text-gray-600 header-paragraph max-w-3xl mx-auto leading-relaxed">
              We combine innovation with reliability to deliver exceptional results for our clients. 
              Here's what sets us apart from the competition.
            </p>
          </div>

          {/* Redesigned Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-blue-400"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold text-blue-400">01</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Seminars</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">Join our engaging seminars where industry leaders collaborate with brands to share insights and strategies.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-purple-400"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold text-purple-400">02</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Extended Support</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">Enjoy 4 to 6weeks of dedicated support from our expert team for your projects.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-[#ec4899]"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold text-[#ec4899]">03</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Approach</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">Custom strategies tailored to your unique business needs and goals.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-grey-400"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold ">04</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Assets</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">High-quality images and graphics to enhance your brand presence.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-red-400"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold text-red-400">05</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">Cutting-edge tools and technologies to power your digital presence.</p>
                </div>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -mr-20 -mt-20 transition-all duration-300 group-hover:bg-indigo-400"></div>
              
              <div className="relative">
                <span className="text-7xl font-bold text-indigo-400">06</span>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Pricing</h3>
                  <p className="text-gray-600 header-paragraph leading-relaxed">Affordable solutions without compromising on quality or features.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20" data-aos="fade-up">
            <button 
               aria-label="Get Started Today"
               className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group" 
               >
              <a href="#call" className="font-semibold">Get Started Today</a>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 z-100 flex items-center justify-center">
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
              </div>
            )}
          </div>
        </div>
      </section>

  </div>;
};

export default Features;