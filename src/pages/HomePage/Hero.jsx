import React, { useState } from 'react'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDiscoverMoreClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
        <section className="section hero" id="home" aria-label="hero">
        <div className="container md:px-40">

          <div className="hero-content">
            <p className="hero-subtitle has-before animate-fade-in-up">
              Welcome to Our Agency
            </p>

            <h1 className="h1 hero-title animate-fade-in-up delay-200">
              Transforming Visions into Digital Excellence
            </h1>

            <p className="hero-text animate-fade-in-up delay-400">
              At Asarion, we're passionate about elevating brands in the digital space. Our expert team combines creative strategy, 
              From brand development to 
              digital marketing, we're your partner in achieving lasting digital success.
            </p>

            <div className="btn-group animate-fade-in-up delay-600">
              <a href="services" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group" onClick={handleDiscoverMoreClick}>
                <span className="font-semibold">Discover More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button className="flex-btn transition-all duration-300 hover:scale-105" id="play-video">
                <div className="btn-icon animate-pulse">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </div>
                <span className="span">How it works</span>
              </button>
            </div>
          </div>

          <figure className="hero-banner has-before img-holder" 
            style={{ "--width": 650, "--height": 650 }}>
            <img src="/images/hero-banner.png" 
              width="650" 
              height="650" 
              alt="hero banner" 
              className="img-cover"
            />
          </figure>

          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                <p>Your modal content goes here.</p>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}

export default Hero