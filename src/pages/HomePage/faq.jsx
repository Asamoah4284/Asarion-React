import React, { useState } from 'react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return <div>
    <section className="section faq relative overflow-hidden" id="faq" aria-label="faq">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full opacity-50 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-50 rounded-full opacity-50 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 0h20L0 20z\'/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container relative md:px-40 mx-auto px-4 py-24">
          {/* Enhanced Header section with new styling */}
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 bg-blue-100 bg-opacity-50 text-blue-600 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Got Questions? We've Got Answers
            </h2>
            
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and support. Can't find what you're looking for? Feel free to contact us.
            </p>
          </div>

          {/* FAQ Grid with updated styling */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-6">
              {/* FAQ Items with glass morphism effect */}
              <div className="faq-item backdrop-blur-sm bg-white bg-opacity-70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white border-opacity-20">
                <button className="w-full text-left px-6 py-4 focus:outline-none" onClick={() => toggleFAQ(0)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Simplified icon container */}
                      <div className="text-blue-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {/* Simplified question text */}
                      <span className="font-bold text-xl text-gray-800">What makes your service unique?</span>
                    </div>
                    {/* Simplified arrow */}
                    <svg className="w-4 h-4 text-gray-500 transform transition-transform duration-300" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`px-6 pb-4 ${openIndex === 0 ? '' : 'hidden'}`}>
                  <p className="text-gray-600 text-xl">
                    We combine cutting-edge technology with personalized service. Our team of experts works closely with each client to deliver tailored solutions that meet their specific needs and exceed expectations.
                  </p>
                </div>
              </div>
              {/* FAQ Item 2 */}
              <div className="faq-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <button className="w-full text-left px-8 py-7 focus:outline-none" onClick={() => toggleFAQ(1)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="font-bold text-xl text-gray-800">How long does the process take?</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`px-8 pb-8 ${openIndex === 1 ? '' : 'hidden'}`}>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Project timelines vary based on scope and complexity. Typically, small projects take 2-4 weeks, while larger ones may take 2-3 months. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* FAQ Item 3 */}
              <div className="faq-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <button className="w-full text-left px-8 py-7 focus:outline-none" onClick={() => toggleFAQ(2)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="font-bold text-xl text-gray-800">Do you offer ongoing support?</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`px-8 pb-8 ${openIndex === 2 ? '' : 'hidden'}`}>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Yes! We provide comprehensive support packages including regular maintenance, updates, and technical assistance. Our team is always available to help you succeed.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <button className="w-full text-left px-8 py-7 focus:outline-none" onClick={() => toggleFAQ(3)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <span className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span className="font-bold text-xl text-gray-800">What are your payment terms?</span>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`px-8 pb-8 ${openIndex === 3 ? '' : 'hidden'}`}>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    We offer flexible payment plans with a standard 50% upfront deposit and the remaining balance upon project completion. We also provide monthly payment options for ongoing services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA section with new styling */}
          <div className="text-center mt-20">
            <p className="text-gray-600 text-xl mb-8">Still have questions? We're here to help!</p>
            <a href="#" className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 text-gray-800 px-8 py-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <span className="font-semibold">Contact Support</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
  </div>;
};

export default Faq;