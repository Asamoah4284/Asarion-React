import React from 'react'
import { Link } from 'react-router-dom';
const Service = () => {
  return <div>
     <section className="section service" id="services" aria-label="service">
        <div className="container md:px-40">

          <p className="section-subtitle text-center">-What We Offer-</p>

          <h2 className="h2-sm section-title text-center">Our Creative Services</h2>

          <p className="section-text  header-paragraph text-center">
            Elevate your digital presence with our comprehensive suite of creative services, designed to help your business thrive in today's competitive landscape.
          </p>

          <ul className="grid-list">
            {/* Dropshipping Service Card */}
            <li className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="service-card has-after">
                <figure className="card-icon bg-blue-50 rounded-2xl p-6">
                  {/* Shopping cart icon */}
                  <svg className="w-20 h-20 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeidth="1.5" 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Dropshipping</h3>
                  <p className="card-text">
                    Launch your online business with our comprehensive dropshipping solutions. We help you set up, manage, and scale your e-commerce store with carefully selected suppliers, automated order processing, and optimized product listings.
                  </p>
                  <a href="#" className="btn-link group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    <a href='dropshipping' title='Launch your online store with out dropshipping package'><span className="span">Read More</span></a>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" 
                            strokelinejoin="round" 
                            strokeWidth="2" 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>

            {/* Website Development Card */}
            <li className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="service-card has-after">
                <figure className="card-icon bg-purple-50 rounded-2xl p-6">
                  {/* Code/Website icon */}
                  <svg className="w-20 h-20 text-purple-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Website Development</h3>
                  <p className="card-text">
                    Transform your vision into a powerful online presence. We build responsive, scalable websites that combine cutting-edge technology with optimized performance to help your business grow.
                  </p>
                  <a href="#" className="btn-link group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    <a href="website-development"><span className="span">Read More</span></a>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>

            {/* Voice Over Service Card */}
            <li className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="service-card has-after">
                <figure className="card-icon bg-green-50 rounded-2xl p-6">
                  {/* Microphone icon */}
                  <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Professional Voice Overs</h3>
                  <p className="card-text">
                    Add a professional touch to your content with our premium voice over services. Our talented artists deliver clear, engaging narration that brings your message to life across all media platforms.
                  </p>
                  <a href="#" className="btn-link group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    <a href='voiceover' title='Professional voiceover services that elevate your content with clarity, emotion, and authenticity.' ><span className="span">Read More</span></a>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>

            {/* Graphic Designing Card */}
            <li className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="service-card has-after">
                <figure className="card-icon bg-red-50 rounded-2xl p-6">
                  {/* Play/Stream icon */}
                  <svg className="w-20 h-20 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">Graphic Design Services</h3>
                  <p className="card-text">
                    Our graphic design services offer creative solutions tailored to your brand. From logos to marketing materials, we create stunning visuals that effectively communicate your message and engage your audience.
                  </p>
                  <a href="#" className="btn-link group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    <a href='graphic-design' title='Learn more about our Graphic Design Services'><span className="span">Read More</span></a>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                         fill="none" 
                         stroke="currentColor" 
                         viewBox="0 0 24 24">
                      <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </li>
          </ul>


        </div>
      </section>
  </div>;
};

export default Service;