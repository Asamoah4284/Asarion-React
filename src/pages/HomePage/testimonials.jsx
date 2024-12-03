import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  // Add state for current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Changed from 6 to 5

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to handle dot navigation
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="section testimonials bg-gray-50 py-24" aria-label="testimonials">
        <div className="container md:px-40">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-blue-600 font-semibold mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience working with us.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="testimonial-carousel relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              {/* Update carousel inner div with transform based on currentSlide */}
              <div 
                className="carousel-inner flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {/* Testimonial 1 */}
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    
                    {/* Testimonial Content */}
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson" 
                           className="w-12 h-12 rounded-full object-cover mr-4"/>
                      <div>
                        <h4 className="font-semibold text-gray-900">Vasty Konadu</h4>
                        <p className="text-gray-500">Sales Manager, UCC</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Michael Chen" 
                           className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Victoria</h4>
                        <p className="text-gray-500">Marketing Director, GrowthCo</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Thompson" 
                           className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Asamoah Richard</h4>
                        <p className="text-gray-500">Founder & CEO, Asarion Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Thompson" 
                           className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Lawrencia Nkansah</h4>
                        <p className="text-gray-500">COO, Asarion Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Thompson" 
                           className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Seth Akowuah</h4>
                        <p className="text-gray-500">Social Media Manager, TechHub</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-gray-600 text-2xl mb-6 italic">
                      "Professional, creative, and responsive. Asarion understood our vision and turned it into reality. Highly recommended!"
                    </p>
                    <div className="flex items-center">
                      <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Thompson" 
                           className="w-12 h-12 rounded-full object-cover mr-4" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Obiri Yeboah Harriet</h4>
                        <p className="text-gray-500">Sales Manager, Garden City</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Update navigation buttons with click handlers */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none prev-btn z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none next-btn z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Update dots navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;